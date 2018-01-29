
## 使用Create React App 脚手架

- 从单纯的组件化实现加一 减一 归零，打印完整生命周期。
  - 只有点击加一触发父组件，所有的组件生命周期都会触发。
  - 消耗性能，整个组件只有数字发生了变化，但是会触发所有的生命周期
- 添加redux 实现加一 减一 归零，打印完整生命周期
  - 只针对绑定了数字的组件才会触发完整生命周期，其他不会触发。性能有所提升。
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
