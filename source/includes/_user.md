# Users

## GetAllUser

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

### 请求参数 T

<table>
  <tr>
    <td>参数</td>
    <td>类型</td>
    <td>默认值</td>
    <td>描述</td>
  </tr>
  <tr>
    <td>page</td>
    <td>int</td>
    <td>1</td>
    <td>当前分页值</td>
  </tr>
  <tr>
    <td>user_id</td>
    <td>int</td>
    <td>-</td>
    <td>查询的用户Id，默认为空，表示不查询</td>
  </tr>
</table>

### 请求参数 X

参数 | 类型 | 默认值 | 描述
--------- | ------- | ------- | -----------
page | int | 1 | 当前分页值
user_id | int | - | 查询的用户Id，默认为空，表示不查询

### 返回参数 T

<table>
  <tr>
    <td>参数</td>
    <td>类型</td>
    <td>默认值</td>
    <td>描述</td>
  </tr>
  <tr>
    <td>page</td>
    <td>int</td>
    <td>1</td>
    <td>当前分页值</td>
  </tr>
  <tr>
    <td>total_count</td>
    <td>int</td>
    <td>0</td>
    <td>总记录数</td>
  </tr>
</table>
<tr>
    <td>data</td>
    <td>struct</td>
    <td>
      
    </td>
    <td>-</td>
  </tr>

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

## GetUser

<aside class="warning">注意比如传入参数</aside>

获取单个用户

### HTTP Request

`POST http://example.com/user/<ID>`

### 请求参数 X

Parameter | Description
--------- | -----------
ID | The ID of the kitten to retrieve

<div class="form-body-div">
  <button class="button" onclick="startTest(this)">开始测试</button>
  <div class="sub" style="display:none;">
    <form action="http://www.baidu.com" target="_abcd" method="post">
    <table class="param-table">
      <tr>
        <td class="label">ID</td>
        <td class="control"><input type="text" name="id" class="input" /></td>
        <td class="desc">字段说明</td>
      </tr>
    </table>
    <input type="button" value="发送参数" onclick="postForm(this)" class="button" >
    </form>
    <iframe id="_abcd" name="_abcd" class="sub_iframe"></iframe>
  </div>
</div>
