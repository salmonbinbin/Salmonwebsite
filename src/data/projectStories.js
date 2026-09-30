// Short, evidence-led copy for the project pages. Keep claims within the project records.
const projectStories = {
  'ai-xiaoshang': {
    goal: '让校园里的课表、录音、文档和教学事务有更顺手的 AI 辅助入口。',
    contribution: '围绕学生、教师与管理员三类角色组织功能，完成前后端实现与讯飞 AI 能力接入。',
    highlights: [
      '用 OCR 识别课表信息，再交给 AI 解析与整理。',
      '把录音上传、转写、总结和文档导出串成一条流程。',
      '为教师工具和管理后台提供独立的使用入口。',
    ],
  },
  'campus-health': {
    goal: '把个人健康记录、体测成绩和趋势查看放在同一个校园健康管理流程中。',
    contribution: '参与前后端开发，整理数据记录、目标追踪与可视化功能，并接入 AI 健康建议。',
    highlights: [
      '支持体重、心率、血压等健康数据记录。',
      '用图表展示记录变化与体测成绩。',
      '支持文件和 MySQL 两种存储方式。',
    ],
  },
  'xunwei-xinhui': {
    goal: '让使用者能按区域和菜系探索新会本地美食，也看见店铺背后的地方故事。',
    contribution: '完成前端页面与地图交互，并参与老店走访、拍摄和内容整理。',
    highlights: [
      '按区域、菜系组织美食信息和搜索入口。',
      '用手绘风格地图连接地点与内容。',
      '将实拍照片与老店资料放进详情页。',
    ],
  },
  'canteen-eval': {
    goal: '围绕校园食堂的菜品评价和改进建议，连接学生反馈与管理端回复。',
    contribution: '完成用户端和管理端的主要页面、接口及数据模型。',
    highlights: [
      '用户可浏览菜品、评分并提交分类建议。',
      '管理员可查看建议并逐条回复。',
      '前后端分离，使用 Spring Boot、Vue 和 MySQL。',
    ],
  },
  'agri-mall': {
    goal: '把消费者选购、农户上架和平台审核放进一条多角色电商流程。',
    contribution: '设计并实现消费者、农户与管理员三端的主要业务功能。',
    highlights: [
      '消费者可浏览商品、管理购物车和查看订单状态。',
      '农户可申请入驻、管理商品与处理订单。',
      '平台端处理农户和商品审核。',
    ],
  },
  'study-room': {
    goal: '让学生查看自习室座位并预约，同时让管理员维护座位与预约信息。',
    contribution: '完成预约接口、身份认证与用户端、管理端的主要流程。',
    highlights: [
      '学生可按时间预约或取消座位。',
      '管理员可维护房间、座位和通知。',
      '后端使用 Spring Boot、MyBatis 和 MySQL。',
    ],
  },
}

export default projectStories
