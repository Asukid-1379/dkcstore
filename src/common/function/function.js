export function pushData(res, lists) {
  for(let i in res){
    //看看拉取到的数据长度，没有就失败
    res[i].data.length >= 1 ? void(0) : reject() 
    //3个数据分别放进不同的数组里
    const list_name = lists[i]
    for(let j of res[i].data){
      //格式化一下数据
      this[list_name].push(this.$store.getters.parseData(j))
    }
  }
}

export function isSlideToBottom() {
  //获取新滚动条位置
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  //拉到底了再次加载商品，计算方法是滚动条高度 + 当前可见内容的高度 + 冗余量 >= 整个文档的真实高度
  //其中滚动条高度是相对于真实高度的 top 的距离，表示的是当前可见内容的 top和真实高度的top之间的距离
  //滚动条的尺寸是当前可见内容高度占真实高度的比例，所以滚动条高度+可见内容高度 == 我的位置+我的身高 == 真实高度 ，
  //那么说明已经到了真实内容的最底部，可以说滚动条到底了
  //此规则可推广至任意元素，不仅是document.documentElement
  if (scrollTop + document.documentElement.clientHeight + 44 >= document.documentElement.scrollHeight) {
    return true
    }
  return false
  }


export function throttle(load) {
  let canRun = false
  return function () {
      if (canRun) return  //节流，只有当前定时器的异步任务执行完了才会进入下一个定时器
      canRun = true
      setTimeout(() => {  
          load()          //传入的是箭头函数，就不改什么this了
          canRun = false
      }, 3000)
  }
}