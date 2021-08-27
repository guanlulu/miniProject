/**
 * 获取对应视图内容的高度
 * @param array - 传来的id数组
 */

export default (params, isTabBar) => {
  return new Promise((resolve, reject) => {
      // 获取设备高度
      wx.getSystemInfo({
        success: function(res) {
          let screenHeight = res.windowHeight
          let query = wx.createSelectorQuery()
          for (let i of params) {
            query.select(i).boundingClientRect()
          }
          if (isTabBar) {
            query.select('#container').boundingClientRect()
          }
          query.exec((res) => {
            // 取出每个对应标签容器的高度
            let containerHeight = 0
            if (isTabBar) {
              containerHeight = res[res.length - 1].height
            }
            let noScrollHeight = res.reduce((total, item, index) => {
              if (isTabBar && index == res.length - 1) return total;
              return total + item.height
            }, 0)
  
            // 用设备高度做减法
            let scrollViewHeight
            if (isTabBar) {
              scrollViewHeight = containerHeight - noScrollHeight
            } else {
              scrollViewHeight = screenHeight - noScrollHeight;
            }
            // 算出来最终滚动条的高度
            resolve(scrollViewHeight)
          })
        }
      })
  })
}
 