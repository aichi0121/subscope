# Subscope 公開示範版

Subscope 是一個在瀏覽器中整理訂閱、試用期限與續訂決策的工具。

此公開版本只包含示範資料，不連接私人 Firebase 專案、分析服務或後端。使用者新增或匯入的資料只保存在目前瀏覽器的本機儲存空間，不會上傳。

## 本機執行

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

輸出位於 `out/`。推送到 `main` 後，GitHub Actions 會自動部署 GitHub Pages。
