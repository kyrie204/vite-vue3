<template>
  <div>{{ title }}</div>
  <a-space>
    <a-button type="primary" @click="test">change-title</a-button>
    <a-button type="primary" @click="Favicon">{{value ? 'facion1': 'facion2'}}</a-button>
  </a-space>
  <div ref="ell" class="ell">
    <div ref="el" :style="[style, { color: isFullscreen ? '#fff' : '#2c3e50' }]" class="dragble">
      <a-space direction="vertical">
        <a-space> x={{ x }} y={{ y }}</a-space>
        <a-space>
          <a-button type="primary" @click="toggle">toggle</a-button>
          <a-button type="dashed" @click="screenFull">全屏</a-button>
          <a-button type="danger" @click="exitFull">退出</a-button>
        </a-space>
      </a-space>
    </div>
  </div>
  <div ref="active" style="border: 1px solid #eee; margin-top: 50px; text-align: left">
    <div>useActiveElement : {{ activeElement }}</div>
    <div class="activeContent">
      <input type="text" data-id="1" placeholder="1" />
      <input type="text" data-id="2" placeholder="2" />
      <input type="text" data-id="3" placeholder="3" />
      <input type="text" data-id="4" placeholder="4" />
    </div>
  </div>
  <!-- <div>{{globalMethods()}}</div> -->
  <div v-dateFormate="date"></div>
</template>

<script setup>
import { ref, watch, onMounted, getCurrentInstance, toRaw } from 'vue';
import { useTitle, useFullscreen, useMouse, useDraggable, useElementSize, useActiveElement, useFavicon, useToggle, useIntervalFn   } from '@vueuse/core';
import facion1 from '@public/cat.png';
import facion2 from '@public/ava.png';
let index = ref(0);
let title = ref('test');
const el = ref();
const ell = ref();
const date = ref(new Date());
let activeElement = ref(null);
// const { x, y } = useMouse();
const { width, height } = useElementSize(el);
const { isFullscreen, enter, exit, toggle } = useFullscreen(ell);
const activeElements = useActiveElement();
const icon = useFavicon();
const [value, settoggle] = useToggle(true);
const { ctx, proxy } = getCurrentInstance()

useIntervalFn (()=>{
  date.value = new Date()
}, 1000)

const test = () => {
  index.value++;
  title.value = `test-title-${index.value}`;
  useTitle(title.value);
};
let { x, y, style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  onMove: (posi) => {
    posi.x < 40 ? (posi.x = 40) : posi.x > window.innerWidth - (width.value + 40) ? (posi.x = window.innerWidth - (width.value + 40)) : posi.x;
    posi.y < 40 ? (posi.y = 40) : posi.y > window.innerHeight - (height.value + 40) ? (posi.y = window.innerHeight - (height.value + 40)) : posi.y;
  },
});
const screenFull = () => {
  if (isFullscreen.value) return;
  enter().then(() => {
    x.value = 150;
    y.value = 150;
  });
};
const exitFull = () => {
  if (!isFullscreen.value) return;
  exit().then(() => {
    x.value = 200;
    y.value = 200;
  });
};
const Favicon = () => {
  settoggle()
};
watch(activeElements, (el) => {
  // console.log('focus changed to', el.dataset.id);
  if (el.dataset.id) {
    activeElement.value = el.dataset.id;
  }
});
watch(value, (f) => {
  if(f) icon.value = facion1;
  else icon.value = facion2;
});
onMounted(()=>{
  proxy.globalMethods()
})
</script>
<style lang="scss">
.dragble {
  border: 1px solid #eee;
  width: 300px;
  margin: auto;
  position: absolute;
  cursor: pointer;
  user-select: none;
}
.activeContent {
  display: flex;

  & > input {
    padding: 8px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    outline: none;
  }
  & > input + input {
    margin-left: 20px;
  }
}
</style>
