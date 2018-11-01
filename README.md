## Kydis 前端项目
  
   **一个简单的blog网站**

   基本功能:

      1. 创建/编辑/查看/浏览 posts

      2. 可添加用户评论

### 技术栈

  __React__ + __Axios/Redux/Rematch/__ + __react-router-dom__ + __evergreen-ui__

### 该项目暂时不能独立运行，需要一台提供如下接口的[服务](https://github.com/july-12/KydisServer)

```javascript

  //resource posts
  GET /api/v1/posts list all posts

  POST /api/v1/posts create new post

  GET /api/v1/posts/{id} retrieve a single post

  PUT /api/v1/posts/{id} update a single post

  DELETE /api/v1/posts/{id}

  //resource categories
  GET /api/v1/categories list all categories

  POST /api/v1/categories create new category

  //resource comments
  POST /api/v1/comments create new comments

```

### 启动项目

      git clone git@github.com:july-12/KydisClient.git

      yarn install / npm install

      yarn start / npm start

      yarn run build / npm run build

