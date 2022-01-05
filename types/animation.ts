import { Chars, Font, Image, Layers, Precomp } from './sources';

export type AnimationData = {
  /**
   * 版本 - Version
   * @desc Bodymovin Version
   */
  v: string;
  /**
   * 名称 - Name
   * @desc Composition name
   */
  nm: string;
  /**
   * 帧率 - Frame Rate
   */
  fr: number;
  /**
   * 起始帧 - In Point
   * @desc In Point of the Time Ruler. Sets the initial Frame of the animation
   */
  ip: number;
  /**
   * 结束帧 - Out Point
   * @desc Out Point of the Time Ruler. Sets the final Frame of the animation
   */
  op: number;
  /**
   * 宽 - Width
   * @desc Composition Width
   */
  w: number;
  /**
   * 高 - Height
   * @desc Composition Height
   */
  h: number;
  /**
   * 是否为 3D - 3D
   * @desc Composition has 3-D layers
   */
  ddd: 0 | 1;
  /** 字体信息 */
  fonts: {
    list?: Font[];
  };
  /**
   * 资源信息
   * @desc source items that can be used in multiple places. Comps and Images for now
   */
  assets: Array<Image | Precomp>;
  /**
   * 图层信息
   * @desc List of Composition Layers.
   */
  layers: Layers;
  /**
   * Chars
   * @desc source chars for text layers
   */
  chars: Chars;
  /**
   * 蒙层信息
   */
  markers: number[];
};
