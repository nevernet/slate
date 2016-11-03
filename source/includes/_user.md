# Users

## 获取所有用户 X

> 返回示例

```json
{
  "page": 1,
  "total_count": 100,
  "data":{
    "users":[
      {
        "id": 2,
        "name": "Max"
      },
      {
        "id": 2,
        "name": "Max"
      }
    ]
  }
}
```

获取所有用户

### 请求地址 X

`GET http://example.com/api/users`

### 请求参数 X

参数 | 类型 | 默认值 | 描述
--------- | ------- | ------- | -----------
page | int | 1 | 当前分页值
user_id | int | - | 查询的用户Id，默认为空，表示不查询

### 返回参数 X

参数 | 类型| 默认值 | 描述
--------- | ------- | ------- | -----------
page | int | 1 | 当前分页值
total_count | int | 0 | 总记录数
data | struct | - | 记录

### data参数 X

参数 | 类型 | 默认值 | 描述
--------- | ------- | ------- | -----------
users | []user | - | -

### user参数 X

参数 | 类型 | 默认值 | 描述
--------- | ------- | ------- | -----------
id | int | - | 用户id
name | string | - | 用户姓名


<aside class="success">
xxxxx提示
</aside>

## 获取单个用户 X

<aside class="warning">注意比如传入参数</aside>

### HTTP Request

`POST http://example.com/user/<ID>`

### 请求参数 X

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve
