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
import {
  BlendMode,
  LayerType,
  Mask,
  MatteMode,
  TextBased,
  TextGrouping,
  TextJustify,
  TextShape,
  Transform,
} from '../helpers';
import { MultiDimensional, Value, OffsetKeyframe } from '../properties';

export enum RangeSelectorType {
  Normal,
  Expressible,
}

export type TextAnimatorDataProperty = {
  /**
   * Name
   * @desc After Effect's Name. Used for expressions
   */
  nm: string;
  /**
   * Text Animator animated properties
   */
  a: {
    /**
     * Anchor Point
     * @desc Text Animator Anchor Point
     */
    a?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Position
     * @desc Text Animator Position
     */
    p?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Scale
     * @desc Text Animator Scale
     */
    s?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Rotation
     * @desc Text Animator Rotation
     */
    r?: Value<number | OffsetKeyframe[]>;
    /**
     * Opacity
     * @desc Text Animator Opacity
     */
    o?: Value<number | OffsetKeyframe[]>;
    /**
     * Skew
     * @desc Text Animator Skew
     */
    sk?: Value<number | OffsetKeyframe[]>;
    /**
     * Skew Axis
     * @desc Text Animator Skew Axis
     */
    sa?: Value<number | OffsetKeyframe[]>;
    /**
     * Width
     * @desc Text Animator Stroke Width
     */
    w?: Value<number | OffsetKeyframe[]>;
    /**
     * Color
     * @desc Text Animator Stroke Color
     */
    c?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Fill Color
     * @desc Text Animator Full Color
     */
    fc?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Fill Hue
     * @desc Text Animator Fill Hue
     */
    fh?: Value<number | OffsetKeyframe[]>;
    /**
     * Fill Saturation
     * @desc Text Animator Fill Saturation
     */
    fs?: Value<number | OffsetKeyframe[]>;
    /**
     * Fill Brightness
     * @desc Text Animator Fill Brightness
     */
    fb?: Value<number | OffsetKeyframe[]>;
    /**
     * Tracking
     * @desc Text Animator Tracking
     */
    t?: Value<number | OffsetKeyframe[]>;
    /**
     * Stroke Color
     * @desc Text Animator Stroke Color
     */
    sc?: MultiDimensional<number[] | OffsetKeyframe[]>;
    /**
     * Stroke Width
     * @desc Text Animator Storke Width
     */
    sw?: Value<number | OffsetKeyframe[]>;
    /**
     * Rotate X
     * @desc Text Animator Rotate X
     */
    rx?: Value<number | OffsetKeyframe[]>;
    /**
     * Rotate Y
     * @desc Text Animator Rotate Y
     */
    ry?: Value<number | OffsetKeyframe[]>;
  };
  /**
   * Animators Range Selecton
   */
  s: {
    /**
     * Type
     * @desc Selector Type. Expressible, or Normal
     */
    t: RangeSelectorType;
    /**
     * Randomize
     * @desc Selector Randomize Order
     */
    r: 0 | 1;
    /**
     * Max Amount
     * @desc Selector Max Amount
     */
    xa: Value<number | OffsetKeyframe[]>;
    /**
     * Min Ease
     * @desc Levels Min Ease
     */
    ne: Value<number | OffsetKeyframe[]>;
    /**
     * Max Ease
     * @desc Levels Max Ease
     */
    xe: Value<number | OffsetKeyframe[]>;
    /**
     * Shape
     * @desc Selector Shape
     */
    sh: TextShape;
    /**
     * Based On
     * @desc Selector Based On
     */
    b: TextBased;
    /**
     * Range Units
     * @desc Selector Range Units. Percentage or Index
     */
    rn: number;
    /**
     * Start
     * @desc Selector Start
     */
    s: Value<number | OffsetKeyframe[]>;
    /**
     * End
     * @desc Selector End
     */
    e: Value<number | OffsetKeyframe[]>;
    /**
     * Offset
     * @desc Selector Offset
     */
    o: Value<number | OffsetKeyframe[]>;
  };
};

/**
 *  Document Data
 */
export type TextDataKeyframe = {
  /**
   * Text Properties
   */
  s: {
    /**
     * Text Font Family
     */
    f: string;
    /**
     * Text Fill Color
     */
    fc: number[];
    /**
     * Text Justification
     */
    j: TextJustify;
    /**
     * Text Line Height
     */
    lh: number;
    /**
     * Text Font Size
     */
    s: number;
    /**
     * Text String Value
     */
    t: string;
    /**
     * Text Tracking
     */
    tr: number;
    /**
     * Text BaseLine Shift
     */
    ls: string | number;
    /**
     * Text Stroke Color
     */
    sc: number[];
    /**
     * Text Stroke Width
     */
    sw: number;
    /**
     * Text Stroke OverFill
     */
    of?: boolean;
  };
  /**
   * Keyframe Time
   */
  t: number;
};

export type TextData = {
  /**
   * Text Document Data Keyframes
   */
  k: TextDataKeyframe[];
};

export type TextMoreOptions = {
  /**
   * Text Anchor Point Grouping
   */
  a: MultiDimensional<number[] | OffsetKeyframe[]>;
  /**
   * Text Grouping Alignment
   */
  g: TextGrouping;
};

export type MaskedPath =
  | number
  | {
      /**
       * mask
       */
      m: number;
      /**
       * First Path
       */
      f: Value<number | OffsetKeyframe[]>;
      /**
       * Last Path
       */
      l: Value<number | OffsetKeyframe[]>;
      r: number;
    };

export type TextAnimatorData = {
  /**
   * Text animators
   */
  a: TextAnimatorDataProperty[];
  /**
   * Text Document Data
   */
  d: TextData;
  /**
   * Text More Options
   */
  m: TextMoreOptions;
  /**
   * Text Path
   */
  p: MaskedPath;
};

export type TextLayer = {
  /**
   * Type
   * @desc Type of layer: Text
   */
  ty: LayerType.Text;
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
   * Text Animator Data
   */
  t: TextAnimatorData;
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
