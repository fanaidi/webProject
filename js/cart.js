var Cart = {
	//加入购物车
	addToCart: function(goods) {
		//判断存储中是否存在shoppingcart，如果不存在表示购物车为空，直接加入购物车
		if (window.localStorage) {
			var shoppingcart = localStorage.getItem("shoppingcart");
			if (!shoppingcart) {
				localStorage.setItem("shoppingcart", JSON.stringify([{
					"id": goods.id,
					"imgUrl": goods.imgUrl,
					"goodsName": goods.goodsName,
					"price": goods.price, 
					"count": 1
				}]))
			} else {//购物车对象已经存在
				var cartitems = JSON.parse(shoppingcart);
				var flag = false;
				$.each(cartitems, function(i, item) {
					if (goods.id == item.id) {
						item.count = item.count + 1;
						flag = true;
						return false; //for break;
					}
				});
				//购物车中已存在当前加入的商品
				if (flag) {
					localStorage.setItem("shoppingcart", JSON.stringify(cartitems));
				} else {
					//购物车中已不存在当前加入的商品
					cartitems.push({
						"id": goods.id,
						"imgUrl": goods.imgUrl,
						"goodsName": goods.goodsName,
						"price": goods.price, 
						"count": 1
					});
					localStorage.setItem("shoppingcart", JSON.stringify(cartitems));
				}
			}
		}
	},
	//删除购物车中的商品
	delFromCart: function(id) {
		var shoppingcart = localStorage.getItem("shoppingcart");
		if (shoppingcart) {
			var cartitems = JSON.parse(shoppingcart);
			$.each(cartitems, function(i, item) {
				if (id == item.id) {
					cartitems.splice(i, 1);//删除商品
					return false; //for break;
				}
			});
			localStorage.setItem("shoppingcart", JSON.stringify(cartitems));
		}
	},
	//更新商品数量
	updateCount: function(id, count) {
		var shoppingcart = localStorage.getItem("shoppingcart");
		if (shoppingcart) {
			var cartitems = JSON.parse(shoppingcart);
			$.each(cartitems, function(i, item) {
				if (id == item.id) {
					item.count = count;
					return false; //for break;
				}
			});
			localStorage.setItem("shoppingcart", JSON.stringify(cartitems));
		}
	}, 
	//获取所有数据
	getAll: function () {
		var shoppingcart = localStorage.getItem("shoppingcart");
		if (shoppingcart) {
			return JSON.parse(shoppingcart);
		}
	}
}