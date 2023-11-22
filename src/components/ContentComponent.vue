<script setup>
// import { ref } from 'vue';
import jsonData from '../json/default.json'
import parseURL from '../utils/URLparse'

</script>
<template>
  <div :style="{ display: 'flex' }" v-for="(data, index) in jsonData" :key="data + '_' + index">
    <a-card :style="{ width: '100%' }" :title="data.name">
      <a-tabs type="card-gutter" v-bind:lazy-load="true" auto-switch>
        <a-tab-pane v-for="(item, itemIndex) in data.categories" :key="item + '_' + itemIndex" :title="data.categories[itemIndex].name">
          <ul class="link-info-list">
            <li v-for="(mark, URLIndex) in item.links" :key="mark + '_' + URLIndex" class="link-info">
              <div>
                <img :src="'https://0x3.com/icon?host=' + parseURL(mark.url)"/>
                <a-tooltip v-bind:content="item.links[URLIndex].name" position="top" mini>
                  <a :href="mark.url" target="_blank">{{ item.links[URLIndex].name }}</a>
                </a-tooltip>
              </div>
            </li>
          </ul>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>
<style>
  .link-info {
    float: left;
    width: 20%;
    background-color: transparent;
    white-space: nowrap;
    overflow: hidden;
    box-sizing: border-box;
    border: 1px dashed transparent;
    padding: 2px;
  }

  /* 适配小屏幕 */
  @media (max-width: 700px){
    .link-info {
      float: left;
      width: 50%;
      background-color: transparent;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
      border: 1px dashed transparent;
      padding: 2px;
    }
  }

  .link-info img {
    border-style: none;
    text-align: center;
    float: left;
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
  }

  .link-info a {
    cursor: pointer;
    text-decoration: none;
    widows: 70%;
    display: block;
    overflow: hidden;
    word-wrap: break-word;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 20px;
    line-height: 20px;
    color: rgb(52, 52, 52);
  }

  .arco-card {
    margin-bottom: 30px;
    border-radius: 4px;
  }

  /* .arco-card-size-medium .arco-card-header {

  } */

  .arco-card-size-medium .arco-card-body {
    padding: 0;
    border: none;
  }
  /* TODO: BUG 间隔出现的 border */
  .arco-card-body .arco-tabs-tab {
    margin-left: 0;
    border-top: none;
    border-left: none;
    border-bottom: none;
    background-color: transparent;
  }
  
  .arco-card-body .arco-tabs-content {
    border: none;
    padding: 16px;
    height: auto;
    overflow: hidden;
  }
</style>

