<script>
  import { ref } from 'vue'
  import jsonData from '../json/default.json'
  import parseURL from '../utils/URLparse'
  let isShowSearchOutput = ref(false)
  let searchOutputItem = []
  export default {
    setup() {

    },
    data() {
      return {
        isShowSearchOutput,
        searchOutputItem,
        parseURL
      }
    },
    methods: {
      showSearchOutput(value) {
        searchOutputItem.splice(0, searchOutputItem.length)
        if(value.length == 0 || value.replace(' ', "").length == 0) {
          this.isShowSearchOutput = ref(false)
          return value
        }
        // 匹配最后一级
        var pattern = new RegExp(value, 'i');
        jsonData.forEach((item) => {
          item.categories.forEach((i) => {
            i.links.forEach((d) => {
              // 模糊匹配
              if(pattern.test(d.name.toString())) {
                searchOutputItem.push(d)
              }
              // if(d.name.indexOf(value) != -1) {
              //   searchOutputItem.push(d)
              // }
            })
          })
        });
        if(searchOutputItem.length != 0) {
          console.log("搜索成功")
          this.isShowSearchOutput = ref(true)
        }
        else {
          console.log("没有搜索结果")
          this.isShowSearchOutput = ref(false)
        }
        return value
      },
      closeSearchOutput() {
        window.addEventListener('click', this.clickOperater)
        searchOutputItem.splice(0, searchOutputItem.length)
      },
      clickOperater(event) {
        if (document.getElementsByClassName('search-output')[0].contains(event.target)) {
          // console.log("点击容器内部");
          window.removeEventListener('click', this.clickOperater)
        }
        else {
          window.removeEventListener('click', this.clickOperater)
          this.isShowSearchOutput = ref(false)
        }
      },
      goToLink(url) {
        event.preventDefault();
        try {
          this.isShowSearchOutput = ref(false)
          window.open(url, '_blank');
        }
        catch(e) {
          console.log(e)
        }
      }
    }
  }
</script>
<template>
  <!-- 实时弹出结果 -->
  <div class="header-container" style="padding: 10px 0px 20px 0px; flex-direction: column; display: flex;  justify-content: center;  align-items: center;">
    <a-space class="search-input-space" direction="vertical" size="large" style="border: 1px solid var(--color-neutral-3); width: 100%;">
      <a-input placeholder="输入关键词搜索书签" v-on:input="showSearchOutput"  v-on:blur="closeSearchOutput" allow-clear>
        <template #prefix>
          <icon-search />
        </template>
      </a-input>
    </a-space>
    <div class="search-output" v-if="isShowSearchOutput">
      <ul class="output-list">
        <li  v-for="(item) in searchOutputItem" :key="searchOutputItem.indexOf(item)" v-on:click="goToLink(item.url)">
          <div class="output-item">
            <div class="search-site-icon">
              <img :src="'https://0x3.com/icon?host=' + parseURL(item.url)"/>
            </div>
            <div class="search-site-info">
              <div class="site-name">
                {{ item.name }}
              </div>
              <div class="site-url">
                {{ item.url }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.header-container {
  position: relative;
}

.search-input-space {
  height: 32px;
}

.search-output {
  position: absolute;
  /* 10 + 32 px */
  top: 42px;
  left: 0;
  right: 0;
  z-index: 999;
  max-height: 500px;
  overflow-y: auto;
  background: #fff;
  margin-top: 2px;
  padding: 7px 10px 2px 10px;
  border: 1px solid #d4d4d4;
  border-radius: 0% 0% 2px 2px;
  box-shadow: 2px 2px 2px rgba(198, 198, 198m 0.699);
}

.output-item {
  height: 50px;
  width: 100%;
  margin-bottom: 5px;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  color: #7b7b7b;
  text-decoration: none;
}

.output-item:hover {
  background: var(--color-fill-1);
  cursor: pointer;
}

.output-item .search-site-icon {
  height: 40px;
  width: 40px;
  margin-left: 0px;
  padding: 2px;
}

.output-item .search-site-icon img{
  height: 100%;
  width: auto;
}

.output-item .search-site-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 5px 10px 5px 10px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.output-item .search-site-info .site-name {
  margin-bottom: 2px;
  font-size: 1em;
  line-height: 1.5em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.output-item .search-site-info .site-url {
  font-size: 0.9em;
  line-height: 1.5em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

</style>
