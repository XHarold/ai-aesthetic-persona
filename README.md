# AI Aesthetic Persona Questionnaire

科研问卷前端 Demo：展示未来 **AI Aesthetic Persona Profile** 可能采用的视觉形式、题型与视觉刺激嵌入方式。

当前阶段是 Prototype / Research Demo，**不收集真实数据**，回答只保存在浏览器 React state 中。

## 运行

```bash
cd ai-aesthetic-persona
npm install
npm run dev
```

浏览器打开终端中提示的本地地址（通常是 `http://localhost:5173`）。

## 当前题型

| type | 说明 |
| --- | --- |
| `single` | 单选 |
| `multi` | 多选 |
| `select` | 下拉选择 |
| `likert` | 1–7 / 1–5 量表 |
| `matrix` | 多条目矩阵 |
| `semantic_differential` | 语义差异滑杆（Kansei） |
| `image_rating` | 结合刺激图的美感 / 喜欢 / 契合度评分 |
| `pairwise` | 成对偏好选择 |
| `text` | 开放文本 |

## 修改问卷内容

只改数据文件即可，不必改 JSX 页面结构：

- 题目：`src/data/questions.js`
- 分区：同一文件中的 `sections`
- 视觉刺激：`src/data/stimuli.js`
- 替换图片：把文件放到 `public/stimuli/`，并更新 `stimuli.js` 中的 `image` 路径

## 项目结构

```
src/
  data/questions.js
  data/stimuli.js
  components/
  Questionnaire.jsx
  App.jsx
public/stimuli/
```

## 当前明确不做

- 后端 / API / 数据库
- 登录注册 / 用户账号
- Supabase / Firebase
- 真实提交与持久化

## 未来可能扩展（尚未实现）

1. Supabase / database
2. participant ID
3. real stimulus library
4. randomized stimulus presentation
5. experiment condition
6. response persistence
7. AI Persona generation
8. Benchmark evaluation
9. longitudinal follow-up
