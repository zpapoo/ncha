export enum COMMENT_MENU {
  DECLARATION = 'declaration',
  LIKE = 'like',
}

export const COMMENT_MENU_COLOR = {
  [COMMENT_MENU.DECLARATION]: '#4E51FF',
  [COMMENT_MENU.LIKE]: '#EF4D88',
}

export const COMMENT_MENU_ICON = {
  [COMMENT_MENU.DECLARATION]: 'alarm.svg',
  [COMMENT_MENU.LIKE]: 'heart.svg',
}
