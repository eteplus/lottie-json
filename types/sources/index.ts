import { ImageLayer, NullLayer, PreCompLayer, ShapeLayer, SolidColorLayer, TextLayer } from '../layers';
import {
  Ellipse,
  Fill,
  GradientFill,
  GradientStroke,
  Group,
  Merge,
  Rect,
  Repeater,
  Round,
  Shape,
  Star,
  Stroke,
  Trim,
  Twist,
} from '../shapes';

export type Layers = Array<NullLayer | TextLayer | ShapeLayer | ImageLayer | PreCompLayer | SolidColorLayer>;

export enum FontPathOrigin {
  Unknown,
  CssUrl,
  ScriptUrl,
  FontUrl,
}

/**
 * 字体信息
 */
export type Font = {
  /** fontPath */
  fPath: string;
  /** fontClass */
  fClass: string;
  /** fontFamily */
  fFamily: string;
  /** fontWeight */
  fWeight: string | number;
  /** fontStyle */
  fStyle: 'Normal' | 'Regular' | 'Italic' | 'Bold' | 'Black' | 'Medium' | 'Light' | 'Thin';
  /** fontName */
  fName: string;
  ascent: number;
  origin?: FontPathOrigin;
  fOrigin?: 'n' | 'g' | 't' | 'p';
};

/**
 * 图片资源信息
 */
export type Image = {
  /**
   * 图片 ID
   * @desc Image ID
   */
  id: string;
  /**
   * 宽 - Width
   * @desc Image Width
   */
  w: number;
  /**
   * 高 - Height
   * @desc Image Height
   */
  h: number;
  /**
   * 路径
   * @desc Image path
   */
  u: string;
  /**
   * 名称
   * @desc Image name
   */
  p: string;
  /**
   * Embedded Image
   * @desc Image data is stored as a data url
   */
  e?: 0 | 1;
};

export type Precomp = {
  /**
   * 	Precomp ID
   */
  id: string;
  /**
   * Layer
   * @desc List of Composition Layers.
   */
  layers: Layers;
};

export type Chars = {
  /**
   * Character Value
   */
  ch: string;
  /**
   * Font Family
   * @desc Character Font Family
   */
  fFamily: string;
  /**
   * Font Size
   * @desc Character Font Size
   */
  size: number;
  /**
   * Font Style
   * @desc Character Font Style
   */
  style: string;
  /**
   * Width
   * @desc Character Width
   */
  w: number;
  /**
   * Character Data
   */
  data: {
    /**
     * Character Composing Shapes
     */
    shapes: Array<
      | Shape
      | Rect
      | Ellipse
      | Star
      | Fill
      | GradientFill
      | GradientStroke
      | Stroke
      | Merge
      | Trim
      | Group
      | Round
      | Repeater
      | Twist
    >;
  };
};
