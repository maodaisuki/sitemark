<script>
  import FooterComponent from '../components/FooterComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import ContentComponent from '../components/ContentComponent.vue';
  // import router from '../router/index';
  export default {
    setup() {
      
    },
    components: {
      HeaderComponent,
      ContentComponent,
      FooterComponent,
    },
    data() {
      return {
        popupVisible: false,
      };
    },
    methods: {
      // 点击菜单项
      floatMenuClick(key) {
        if(key === '1') {
          window.open('https://github.com/maodaisuki/sitemark')
        } 
        else if (key === '2') {
          try {
            this.$router.push({path:'/setting'})
          }
          catch(e) {
            console.log(e)
          }
        }
        else {
          console.log("未知项菜单")
        }
      }
    }
};
</script>

<template>
  <div class="main-layout">
    <a-layout style="width: 100%;">
      <a-layout-header><HeaderComponent/></a-layout-header>
      <a-layout-content><ContentComponent/></a-layout-content>
      <a-layout-footer><FooterComponent/></a-layout-footer>
    </a-layout>
    <!-- 悬浮按钮 -->
    <div class="floatMenuButton">
      <a-trigger
        :trigger="['click', 'hover']"
        clickToClose
        position="top"
        v-model:popupVisible="popupVisible"
      >
        <div :class="`button-trigger ${popupVisible ? 'button-trigger-active' : ''}`">
          <IconClose v-if="popupVisible" />
          <icon-tool v-else />
        </div>
        <template #content>
          <a-menu
            :style="{ marginBottom: '-4px' }"
            mode="popButton"
            :tooltipProps="{ position: 'right' }"
            @menu-item-click="floatMenuClick"
            showCollapseButton
          >
            <a-menu-item key="1">
              <template #icon>
                <icon-github></icon-github>
              </template>
              Github 仓库
            </a-menu-item>
            <a-menu-item key="2">
              <template #icon>
                <icon-settings></icon-settings>
              </template>
              设置
            </a-menu-item>
          </a-menu>
        </template>
      </a-trigger>
    </div>
  </div>
</template>

<style scoped>
.main-layout {
  background: #f3f3f3;
  width: clamp(300px, 70%, 750px);
  margin: 0 auto;
  padding: 20px 40px 30px 40px;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.button-trigger {
    position: fixed;
    right: 220px;
    bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--color-white);
    font-size: 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s;
    background-color: rgb(var(--arcoblue-6));
    z-index: 999;
}

/* 适配小屏幕 */
@media (max-width: 700px){
  .button-trigger {
    position: fixed;
    right: 50px;
    bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: var(--color-white);
    font-size: 14px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.1s;
    background-color: rgb(var(--arcoblue-6));
    z-index: 999;
  }
}

.button-trigger-settings {
  right: 420px !important;
}

.button-trigger .button-trigger-active {
  background-color: rgb(var(--arcoblue-6));
}
</style>
