<template>
  <div class="shop-list">
    <table>
      <tr class="shop-listtitle">
        <td>id</td>
        <td>名称</td>
        <td>价格</td>
        <td>操作</td>
      </tr>
      <tr v-for="item in getShopList" :key="item.id" class="shop-listinfo">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><button @click="addToCart(item)">加</button></td>
        <td><button @click="reduce(item)" v-if="num >0">减</button></td>
      </tr>
    </table>
  </div>
</template>
<script>
  import{mapMutations, mapGetters, mapActions } from "vuex";
  export default{
    name:'shopList',
    data(){
      return{
        
      }
    },
    computed:{

      // ShopList(){
      //   return this.$store.state.shop_list
      // },
            ...mapGetters({
        getShopList:'getShopList',
        num:'totalNum'
       
      })
    // ...mapState(['shop_list'])
    },
    methods:{
      ...mapActions({
        addToCart:'addToCart',
        reduce:'reduce'
      })
    }
  }
</script>