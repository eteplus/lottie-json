import { BlendMode, ShapeType } from '../helpers';
import { Ellipse } from './ellipse';
import { Fill } from './fill';
import { GradientFill } from './gFill';
import { GradientStroke } from './gStroke';
import { Merge } from './merge';
import { Rect } from './rect';
import { Round } from './round';
import { Shape } from './shape';
import { Star } from './star';
import { Stroke } from './stroke';
import { TransformShape } from './transform';
import { Trim } from './trim';
import { Twist } from './twist';

export type Group = {
  /**
   * Match Name
   * @desc After Effect's Match Name. Used for expressions
   */
  mn: string;
  /**
   * Name
   * @desc After Effect's Name. Used for expressions
   */
  nm: string;
  /**
   * Type
   * @desc Shape content type
   */
  ty: ShapeType.Group;
  /**
   * Number of Properties
   * @desc Group number of properties. Used for expressions
   */
  np: number;
  /**
   * Items
   * @desc Group list of items
   */
  it: Array<
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
    | TransformShape
    | Twist
  >;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  cix?: number;
  /**
   * Property Index
   * @desc Property Index. Used for expressions
   */
  ix?: number;
  /**
   * Hide element
   */
  hd?: boolean;
  /**
   * 混合模式 - Blend Mode
   * @default BlendMode.Normal
   */
  bm?: BlendMode;
};
