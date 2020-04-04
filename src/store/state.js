import {playMode} from 'common/js/config'
import {loadPlay, loadFavorite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,      // 播放器展开收起
  playlist: [],          // 播放列表
  sequenceList: [],         // 顺序列表
  mode: playMode.sequence,  // 默认顺序播放
  currentIndex: -1,         // 当前播放
  disc: {},
  topList: {},
  playHistory: loadPlay(),
  favoriteList: loadFavorite()
}

export default state
