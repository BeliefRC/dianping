# 这是一个使用react模仿大众点评APP的项目

之前有一定的react的基础，在这个项目中加入了redux，对redux有了一个初步的了解。


## 一.项目运行
项目下载后
   ```markdown
 npm i	//安装依赖包
 npm run mock	//运行模拟数据服务
npm start	//启动项目
```
1. 项目将会启动在本地服务器3000端口,打开控制台切换到手机模式
2. 模拟数据服务将会启动在本地服务器3001端口
3. 如果图片无法显示（403），是因为链接的图片有设置防止盗链，可以再network中手动点开图片的地址，打开图片，这样项目就可以正常访问图片了。

## 二.使用的工具
1. 使用了create-react-app 官方脚手架工具搭建了项目，
2. 使用了react-router处理路由
3. 使用fetch来获取api的数据
4. 使用redux来进行数据处理
5. 使用react-addons-pure-render-mixin优化项目，达到组件按需更新
6. 使用koa，koa-router,koa-cors来进行数据数据模拟,路由，跨域

#三.目录结构
```
    dianping/
    	config/
    	mock/		模拟的数据
    	node_modules/
    	public/
    	script/
   	 src/
    		actions/
    		components/		木偶组件
    		config/		localStorage中使用的常量
    		constans/		redux中使用到的常量
    		containers/		智能组件
    		fetch/		fetch公共操作
    		reducers/		规则
    		router/		路由配置
    		static/		静态字体，css文件
    		store/		单一状态树
    		until/		 localStorage的公共处理
    		index.js
			registerServiceWorker.js
   	 package.json
    	README.md
 ```
    
## 四.主要功能
###### 1.首页的展示
1. 顶部的搜索框
2. 轮播图
3. 广告的展示
4.  猜你喜欢列表（下拉无限加载）

###### 2.城市页面的选择
1. 显示当前城市
2. 选择城市表格

###### 3.搜索页面显示商户列表
1. 根据分类，搜索关键字请求数据显示商户列表（下拉无限加载）

###### 4.商户详情页（包含显示评论，收藏与购买）
1. 显示商户基本信息
2. 购买与收藏按钮
3. 显示所有评论（下拉无限加载）

###### 5.登录页面
1. 账号与验证的输入
2. 模拟验证码发送
3. 未输入前登陆按钮的禁用

###### 6.用户中心页面（包含评论）
1. 显示购买的订单
2. 订单的评价功能

**提示：因模拟的数据有限，下拉加载显示的内容是一样的，但是每次请求发送携带的参数是不同的**

###### 6.截图展示

[![首页](http://wx3.sinaimg.cn/mw690/85eda507gy1fj0zlht0iij20d60n9my5.jpg "首页")](http://wx3.sinaimg.cn/mw690/85eda507gy1fj0zlht0iij20d60n9my5.jpg "首页")

[![城市页面](http://wx2.sinaimg.cn/mw690/85eda507gy1fj0zljjfvmj20dc0n5gli.jpg "城市页面")](http://wx2.sinaimg.cn/mw690/85eda507gy1fj0zljjfvmj20dc0n5gli.jpg "城市页面")

[![商户列表](http://wx2.sinaimg.cn/mw690/85eda507gy1fj0zlidzv2j20d70n70ty.jpg "商户列表")](http://wx2.sinaimg.cn/mw690/85eda507gy1fj0zlidzv2j20d70n70ty.jpg "商户列表")

[![商户详情](http://wx1.sinaimg.cn/mw690/85eda507gy1fj0zlivkg2j20d30n8gm8.jpg "商户详情")](http://wx1.sinaimg.cn/mw690/85eda507gy1fj0zlivkg2j20d30n8gm8.jpg "商户详情")

[![登陆特面](http://wx4.sinaimg.cn/mw690/85eda507gy1fj0zlkh07aj20d10n53yb.jpg "登陆特面")](http://wx4.sinaimg.cn/mw690/85eda507gy1fj0zlkh07aj20d10n53yb.jpg "登陆特面")

[![用户中心](http://wx3.sinaimg.cn/mw690/85eda507gy1fj0zlktsctj20d20n73zc.jpg "用户中心")](http://wx3.sinaimg.cn/mw690/85eda507gy1fj0zlktsctj20d20n73zc.jpg "用户中心")