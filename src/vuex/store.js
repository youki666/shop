/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({

  state: {
    shop_list: [{
      id: 11,
      name: '鱼香肉丝',
      price: 12
    }, {
      id: 22,
      name: '宫保鸡丁',
      price: 14
    }, {
      id: 34,
      name: '土豆丝',
      price: 10
    }, {
      id: 47,
      name: '米饭',
      price: 2
    }, {
      id: 49,
      name: '蚂蚁上树',
      price: 13
    },
    {
      id: 50,
      name: '腊肉炒蒜薹',
      price: 15
    }],
    add: [ ]
  },
  getters:{// 获取商品列表
  getShopList: state => state.shop_list,
  // 获取购物车列表
  addShopList: state => state.add.map(({id , num}) =>{
      let product = state.shop_list.find(n => n.id == id)
      console.log(product)
      console.log(num)
      if(product){
          return {
              ...product,
              num
          }
      }
  }),
  ///是否添加到了购物车
  num: state => state.add.map(({id, num}) => {
    let record = state.add.find(n => n.id == id);
    console.log(record.num)
    return record.num
  })
     
  ,
  //获取总数量
totalNum:(state,getters) =>{
  let total =0;
  getters.addShopList.map(n=>{
    total += n.num;
  })
  return total;
},
//计算总价格
totalPrice:(state,getters)=>{
  let total=0;
  getters.addShopList.map(n=>{
    total += n.num * n.price
  })
  return total;
},
},
  mutations: {//加入购物车
    addToCart(state,{id}){
     let record = state.add.find(n => n.id == id);
     if(!record){
       state.add.push({
         id,
         num:1
       })
     }else{
       record.num++;
     }
   },
   ///----
   reduce(state,{id}){
     let record = state.add.find(n => n.id == id);
     console.log(record.num)
     if( record.num !==0){
         record.num--
     }else if(record.num ==0) {
        alert('再减就没了！')
         return
     }
   },
   //删除单个物品
   deletShop(state,product){
     state.add.forEach((item,i)=>{
       if(item.id == product.id){
         state.add.splice(i,1)
       }
     })
   },
   //清空购物车
   clearCart(state){
     state.add=[];
   }},
  actions: {//加入购物车
    addToCart({commit},product){
    // alert(product.id)
     commit('addToCart',{
       id:product.id
     })
   },
   reduce({commit},product){
     // alert(product.id)
      commit('reduce',{
        id:product.id
      })
    },
   //清空购物车
   clearToCart({commit}){
       //alert('确定要清空吗?')
     commit('clearCart')
   },
   //删除单个物品
   deletToShop({commit},product){
     commit('deletShop',product)
   }},
})


