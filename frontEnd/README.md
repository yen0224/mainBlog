開發進度紀錄 for 5/23組會
# 前端工程
## issue(s)
- [ ] login\register 頁面嚴重跑掉
- [ ] RWD
### index
- [x] 隱藏checkbox符號
- [ ] 更換CSS 的identifier從class為id
- [ ] drawer 效果
    - [ ] 顏色
    - [ ] 動畫
    - [ ] 動畫時間
    - [ ] 位置

# 後端工程
## done
- api
    - [x]GET /
    - [x]GET /:slug
    - [x]GET /:id
    - [x]DELETE /:id
    - [x]POST / :待解決，看issue
    - [x]PUT /:id 同上
## issue(s)
- [x] 可以解析來自前端頁面 post 出的資料，但無法利用postman來測試
    - 可能是資料格式 (JSON v.s x-www-form-urlencoded) 的問題
    - 嘗試在前端照原本方式直接 post 資料給後端 [solved]

# 橋接工作
- [ ] proxy
- [ ] 後端接口
    - [ ] 可以接受前端 post 出來的資料
    - [ ] 可以接受前端 put 出來的資料
    - [ ] 可以接受前端 delete 出來的資料
    - [x] 可以接受前端 get 出來的資料
## issue(s)