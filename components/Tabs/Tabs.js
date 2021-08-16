// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  /*里面存放要从父组件中接收的数据 */
  properties: {
      //要接收的数据的名称
      //aaa:{
        //type 要接收的数据的类型
        //type:String,
        //value 默认值
        //value:""
        //}
        Tabs:{
          type:Array,
          value:[]
        }
  },

  /**
   * 组件的初始数据
   */
  data:{
  },
  /*页面js中存放事件回调函数时候存放在data同一层级下！！！ 
    但是在组件的js文件中回调函数要存放在methods当中 ！！！*/
  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      /*
      1.绑定点击事件
      2.获取被点击索引
      3.获取原数组
      4.对数组循环  
        1 给每一个循环项的选中属性改为false
        2 给当前索引项添加激活选中效果！！！
      */
     // 2 获取索引
     const {index} = e.currentTarget.dataset;
     //3 获取data中的数组
     //下面只复制了一份变量的引用而已
     //最严谨的写法是重新拷贝一份数组再对数组进行处理
     //如：let Tabs = JSON.parse(JSON.stringify(this.data.Tabs));

     let {Tabs} = this.data;

     //4 循环数组
     // [].forEach遍历数组 遍历数组的时候修改了v 也会导致数组被修改
     
      Tabs.forEach((v,i)=>i===index ? v.isActive=true:v.isActive=false);

      this.setData({
        Tabs
      })
    }
  }
})
