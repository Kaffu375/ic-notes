require("dotenv").config();
const settings = require("../../helpers/constants");

const allSettings = settings.ALL_NOTE_SETTINGS;

module.exports = {
  eleventyComputed: {
    layout: (data) => {
      // 保留原逻辑：gardenEntry 标签使用首页布局
      if (data.tags?.indexOf("gardenEntry") !== -1) {
        return "layouts/index.njk";
      }
      return "layouts/note.njk";
    },
    permalink: (data) => {
      // 处理 gardenEntry 标签的笔记（控制首页唯一性）
      if (data.tags?.indexOf("gardenEntry") !== -1) {
        // 只有文件名是 "home" 的笔记才生成根目录 index.html
        // 其他 gardenEntry 标签的笔记生成独立路径（避免冲突）
        if (data.page.fileSlug === "home") {
          return "/"; // 仅 home.md 生成根目录 index.html
        } else {
          return `/${data.page.fileSlug}/`; // 其他生成 /文件名/index.html
        }
      }

      // 非 gardenEntry 标签的笔记：自动生成唯一 permalink（.html 格式）
      // 优先使用笔记自身设置的 permalink，若无则自动生成
      return data.permalink || `${data.page.filePathStem}.html`;
    },
    settings: (data) => {
      const noteSettings = {};
      allSettings.forEach((setting) => {
        let noteSetting = data[setting];
        let globalSetting = process.env[setting];

        let settingValue =
          noteSetting || (globalSetting === "true" && noteSetting !== false);
        noteSettings[setting] = settingValue;
      });
      return noteSettings;
    },
  },
};
