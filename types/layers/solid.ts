import {
  ChangeToColorEffect,
  DropShadowEffect,
  FillEffect,
  GaussianBlurEffect,
  Matte3Effect,
  ProLevelsEffect,
  StrokeEffect,
  TintEffect,
  TritoneEffect,
} from '../effects';
import { BlendMode, LayerType, Mask, MatteMode, Transform } from '../helpers';

export type SolidColorLayer = {
  /**
   * Type
   * @desc Type of layer: Solid
   */
  ty: LayerType.Solid;
  /**
   * Transform
   * @desc Transform properties
   */
  ks: Transform;
  /**
   * 是否沿路径AE属性自动定向 - Auto-Orient
   * @desc Auto-Orient along path AE property
   * @default 0
   */
  ao: 0 | 1;
  /**
   * 混合模式 - Blend Mode
   * @default BlendMode.Normal
   */
  bm: BlendMode;
  /**
   * 3D Layer
   * @desc 3d layer flag
   */
  ddd: 0 | 1;
  /**
   * 图层ID - Index
   * @desc Layer index in AE. Used for parenting and expressions
   */
  ind: number;
  /**
   * Class
   * @desc Parsed layer name used as html class on SVG/HTML renderer
   */
  cl: string;
  /**
   * layer HTML ID
   * @desc Parsed layer name used as html id on SVG/HTML renderer
   */
  ln: string;
  /**
   * 起始帧 - In Point
   * @desc In Point of layer. Sets the initial frame of the layer
   */
  ip: number;
  /**
   * 结束帧 - Out Point
   * @desc Out Point of layer. Sets the final frame of the layer
   */
  op: number;
  /**
   * Start Time
   * @desc Start Time of layer. Sets the start time of the layer
   */
  st: number;
  /**
   * 名称 - Name
   * @desc Composition name
   */
  nm: string;
  /**
   * Has Masks
   * @deprecated
   * @desc Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties
   */
  hasMask: number;
  /**
   * Masks Properties
   * @desc List of Masks
   */
  masksProperties: Mask[];
  /**
   * Effects
   * @desc List of Effects
   */
  ef: Array<
    | FillEffect
    | StrokeEffect
    | TritoneEffect
    | ProLevelsEffect
    | TintEffect
    | DropShadowEffect
    | Matte3Effect
    | GaussianBlurEffect
    | ChangeToColorEffect
  >;
  /**
   * Stretch
   * @desc Layer Time Stretching
   * @default 1
   */
  sr: number;
  /**
   * Parent
   * @desc Layer Parent. Uses ind of parent
   */
  parent: number;
  /**
   * Solid Color
   * @desc Color of the solid in hex
   */
  sc: string;
  /**
   * Solid Height
   * @desc Height of the solid
   */
  sh: number;
  /**
   * Solid Width
   * @desc Width of the solid
   */
  sw: number;
  /**
   * Matte mode
   * @desc The layer will inherit the transparency from the layer above
   */
  tt?: MatteMode;
  /**
   * Hide layer
   */
  hd?: boolean;
};
