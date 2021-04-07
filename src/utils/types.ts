export interface LighthouseResult {
  userAgent: string;
  environment: Environment;
  lighthouseVersion: string;
  fetchTime: string;
  requestedUrl: string;
  finalUrl: string;
  runWarnings: any[];
  audits: Audits;
  configSettings: ConfigSettings;
  categories: Categories;
  categoryGroups: CategoryGroups;
  timing: Timing;
  i18n: I18N;
  stackPacks: StackPack[];
}

export interface Environment {
  networkUserAgent: string;
  hostUserAgent: string;
  benchmarkIndex: number;
  credits: Credits;
}

export interface Credits {}

export interface Audits {
  'first-contentful-paint': FirstContentfulPaint;
  'largest-contentful-paint': LargestContentfulPaint;
  'first-meaningful-paint': FirstMeaningfulPaint;
  'speed-index': SpeedIndex;
  'screenshot-thumbnails': ScreenshotThumbnails;
  'final-screenshot': FinalScreenshot;
  'estimated-input-latency': EstimatedInputLatency;
  'total-blocking-time': TotalBlockingTime;
  'max-potential-fid': MaxPotentialFid;
  'cumulative-layout-shift': CumulativeLayoutShift;
  'server-response-time': ServerResponseTime;
  'first-cpu-idle': FirstCpuIdle;
  interactive: Interactive;
  'user-timings': UserTimings;
  'critical-request-chains': CriticalRequestChains;
  redirects: Redirects;
  'mainthread-work-breakdown': MainthreadWorkBreakdown;
  'bootup-time': BootupTime;
  'uses-rel-preload': UsesRelPreload;
  'uses-rel-preconnect': UsesRelPreconnect;
  'font-display': FontDisplay;
  diagnostics: Diagnostics;
  'network-requests': NetworkRequests;
  'network-rtt': NetworkRtt;
  'network-server-latency': NetworkServerLatency;
  'main-thread-tasks': MainThreadTasks;
  metrics: Metrics;
  'performance-budget': PerformanceBudget;
  'timing-budget': TimingBudget;
  'resource-summary': ResourceSummary;
  'third-party-summary': ThirdPartySummary;
  'third-party-facades': ThirdPartyFacades;
  'largest-contentful-paint-element': LargestContentfulPaintElement;
  'layout-shift-elements': LayoutShiftElements;
  'long-tasks': LongTasks;
  'non-composited-animations': NonCompositedAnimations;
  'unsized-images': UnsizedImages;
  'preload-lcp-image': PreloadLcpImage;
  'full-page-screenshot': FullPageScreenshot;
  'uses-long-cache-ttl': UsesLongCacheTtl;
  'total-byte-weight': TotalByteWeight;
  'offscreen-images': OffscreenImages;
  'render-blocking-resources': RenderBlockingResources;
  'unminified-css': UnminifiedCss;
  'unminified-javascript': UnminifiedJavascript;
  'unused-css-rules': UnusedCssRules;
  'unused-javascript': UnusedJavascript;
  'uses-webp-images': UsesWebpImages;
  'uses-optimized-images': UsesOptimizedImages;
  'uses-text-compression': UsesTextCompression;
  'uses-responsive-images': UsesResponsiveImages;
  'efficient-animated-content': EfficientAnimatedContent;
  'duplicated-javascript': DuplicatedJavascript;
  'legacy-javascript': LegacyJavascript;
  'dom-size': DomSize;
  'no-document-write': NoDocumentWrite;
  'uses-http2': UsesHttp2;
  'uses-passive-event-listeners': UsesPassiveEventListeners;
}

export interface FirstContentfulPaint {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface LargestContentfulPaint {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface FirstMeaningfulPaint {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface SpeedIndex {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface ScreenshotThumbnails {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details;
}

export interface Details {
  type: string;
  scale: number;
  items: Item[];
}

export interface Item {
  timing: number;
  timestamp: number;
  data: string;
}

export interface FinalScreenshot {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details2;
}

export interface Details2 {
  type: string;
  timing: number;
  timestamp: number;
  data: string;
}

export interface EstimatedInputLatency {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface TotalBlockingTime {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface MaxPotentialFid {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface CumulativeLayoutShift {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details3;
}

export interface Details3 {
  type: string;
  items: Item2[];
}

export interface Item2 {
  finalLayoutShiftTraceEventFound: boolean;
}

export interface ServerResponseTime {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details4;
}

export interface Details4 {
  type: string;
  headings: Heading[];
  items: Item3[];
  overallSavingsMs: number;
}

export interface Heading {
  key: string;
  valueType: string;
  label: string;
}

export interface Item3 {
  url: string;
  responseTime: number;
}

export interface FirstCpuIdle {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface Interactive {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
}

export interface UserTimings {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details5;
}

export interface Details5 {
  type: string;
  headings: any[];
  items: any[];
}

export interface CriticalRequestChains {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details6;
}

export interface Details6 {
  type: string;
  chains: Chains;
  longestChain: LongestChain;
}

export interface Chains {
  B8E7E3F51181982D44952F8CD8889C90: B8E7E3F51181982D44952F8Cd8889C90;
}

export interface B8E7E3F51181982D44952F8Cd8889C90 {
  request: Request;
  children: Children;
}

export interface Request {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface Children {
  '1977.2': N19772;
  '1977.3': N19773;
  '1977.4': N19774;
  '1977.5': N19775;
  '1977.6': N19776;
}

export interface N19772 {
  request: Request2;
  children: Children2;
}

export interface Request2 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface Children2 {
  '1977.11': N197711;
  '1977.23': N197723;
  '1977.17': N197717;
  '1977.20': N197720;
}

export interface N197711 {
  request: Request3;
}

export interface Request3 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N197723 {
  request: Request4;
}

export interface Request4 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N197717 {
  request: Request5;
}

export interface Request5 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N197720 {
  request: Request6;
}

export interface Request6 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N19773 {
  request: Request7;
}

export interface Request7 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N19774 {
  request: Request8;
}

export interface Request8 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N19775 {
  request: Request9;
}

export interface Request9 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface N19776 {
  request: Request10;
}

export interface Request10 {
  url: string;
  startTime: number;
  endTime: number;
  responseReceivedTime: number;
  transferSize: number;
}

export interface LongestChain {
  duration: number;
  length: number;
  transferSize: number;
}

export interface Redirects {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details7;
}

export interface Details7 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
}

export interface MainthreadWorkBreakdown {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details8;
}

export interface Details8 {
  type: string;
  headings: Heading2[];
  items: Item4[];
}

export interface Heading2 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item4 {
  group: string;
  groupLabel: string;
  duration: number;
}

export interface BootupTime {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details9;
}

export interface Details9 {
  type: string;
  headings: Heading3[];
  items: Item5[];
  summary: Summary;
}

export interface Heading3 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item5 {
  url: string;
  total: number;
  scripting: number;
  scriptParseCompile: number;
}

export interface Summary {
  wastedMs: number;
}

export interface UsesRelPreload {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details10;
}

export interface Details10 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
}

export interface UsesRelPreconnect {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  warnings: any[];
  details: Details11;
}

export interface Details11 {
  type: string;
  headings: Heading4[];
  items: Item6[];
  overallSavingsMs: number;
}

export interface Heading4 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item6 {
  url: string;
  wastedMs: number;
}

export interface FontDisplay {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  warnings: any[];
  details: Details12;
}

export interface Details12 {
  type: string;
  headings: Heading5[];
  items: Item7[];
}

export interface Heading5 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item7 {
  url: string;
  wastedMs: number;
}

export interface Diagnostics {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details13;
}

export interface Details13 {
  type: string;
  items: Item8[];
}

export interface Item8 {
  numRequests: number;
  numScripts: number;
  numStylesheets: number;
  numFonts: number;
  numTasks: number;
  numTasksOver10ms: number;
  numTasksOver25ms: number;
  numTasksOver50ms: number;
  numTasksOver100ms: number;
  numTasksOver500ms: number;
  rtt: number;
  throughput: number;
  maxRtt: number;
  maxServerLatency: number;
  totalByteWeight: number;
  totalTaskTime: number;
  mainDocumentTransferSize: number;
}

export interface NetworkRequests {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details14;
}

export interface Details14 {
  type: string;
  headings: Heading6[];
  items: Item9[];
}

export interface Heading6 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
  displayUnit?: string;
}

export interface Item9 {
  url: string;
  protocol: string;
  startTime: number;
  endTime: number;
  finished: boolean;
  transferSize: number;
  resourceSize: number;
  statusCode: number;
  mimeType: string;
  resourceType?: string;
}

export interface NetworkRtt {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details15;
}

export interface Details15 {
  type: string;
  headings: Heading7[];
  items: Item10[];
}

export interface Heading7 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item10 {
  origin: string;
  rtt: number;
}

export interface NetworkServerLatency {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details16;
}

export interface Details16 {
  type: string;
  headings: Heading8[];
  items: Item11[];
}

export interface Heading8 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item11 {
  origin: string;
  serverResponseTime: number;
}

export interface MainThreadTasks {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details17;
}

export interface Details17 {
  type: string;
  headings: Heading9[];
  items: Item12[];
}

export interface Heading9 {
  key: string;
  itemType: string;
  granularity: number;
  text: string;
}

export interface Item12 {
  duration: number;
  startTime: number;
}

export interface Metrics {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  details: Details18;
}

export interface Details18 {
  type: string;
  items: Item13[];
}

export interface Item13 {
  firstContentfulPaint?: number;
  firstMeaningfulPaint?: number;
  largestContentfulPaint?: number;
  firstCPUIdle?: number;
  interactive?: number;
  speedIndex?: number;
  estimatedInputLatency?: number;
  totalBlockingTime?: number;
  maxPotentialFID?: number;
  cumulativeLayoutShift?: number;
  cumulativeLayoutShiftAllFrames?: number;
  observedTimeOrigin?: number;
  observedTimeOriginTs?: number;
  observedNavigationStart?: number;
  observedNavigationStartTs?: number;
  observedFirstPaint?: number;
  observedFirstPaintTs?: number;
  observedFirstContentfulPaint?: number;
  observedFirstContentfulPaintTs?: number;
  observedFirstContentfulPaintAllFrames?: number;
  observedFirstContentfulPaintAllFramesTs?: number;
  observedFirstMeaningfulPaint?: number;
  observedFirstMeaningfulPaintTs?: number;
  observedLargestContentfulPaint?: number;
  observedLargestContentfulPaintTs?: number;
  observedLargestContentfulPaintAllFrames?: number;
  observedLargestContentfulPaintAllFramesTs?: number;
  observedTraceEnd?: number;
  observedTraceEndTs?: number;
  observedLoad?: number;
  observedLoadTs?: number;
  observedDomContentLoaded?: number;
  observedDomContentLoadedTs?: number;
  observedCumulativeLayoutShift?: number;
  observedCumulativeLayoutShiftAllFrames?: number;
  observedFirstVisualChange?: number;
  observedFirstVisualChangeTs?: number;
  observedLastVisualChange?: number;
  observedLastVisualChangeTs?: number;
  observedSpeedIndex?: number;
  observedSpeedIndexTs?: number;
  layoutShiftAvgSessionGap5s?: number;
  layoutShiftMaxSessionGap1s?: number;
  layoutShiftMaxSessionGap1sLimit5s?: number;
  layoutShiftMaxSliding1s?: number;
  layoutShiftMaxSliding300ms?: number;
  lcpInvalidated?: boolean;
}

export interface PerformanceBudget {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
}

export interface TimingBudget {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
}

export interface ResourceSummary {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details19;
}

export interface Details19 {
  type: string;
  headings: Heading10[];
  items: Item14[];
}

export interface Heading10 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item14 {
  resourceType: string;
  label: string;
  requestCount: number;
  transferSize: number;
}

export interface ThirdPartySummary {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details20;
}

export interface Details20 {
  type: string;
  headings: Heading11[];
  items: Item15[];
  summary: Summary2;
}

export interface Heading11 {
  key: string;
  itemType: string;
  text: string;
  subItemsHeading: SubItemsHeading;
  granularity?: number;
}

export interface SubItemsHeading {
  key: string;
  itemType?: string;
}

export interface Item15 {
  mainThreadTime: number;
  blockingTime: number;
  transferSize: number;
  entity: Entity;
  subItems: SubItems;
}

export interface Entity {
  type: string;
  text: string;
  url: string;
}

export interface SubItems {
  type: string;
  items: Item16[];
}

export interface Item16 {
  url: string;
  mainThreadTime?: number;
  blockingTime: number;
  transferSize: number;
}

export interface Summary2 {
  wastedBytes: number;
  wastedMs: number;
}

export interface ThirdPartyFacades {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
}

export interface LargestContentfulPaintElement {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details21;
}

export interface Details21 {
  type: string;
  headings: Heading12[];
  items: Item17[];
}

export interface Heading12 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item17 {
  node: Node;
}

export interface Node {
  type: string;
  lhId: string;
  path: string;
  selector: string;
  boundingRect: BoundingRect;
  snippet: string;
  nodeLabel: string;
}

export interface BoundingRect {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface LayoutShiftElements {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details22;
}

export interface Details22 {
  type: string;
  headings: Heading13[];
  items: Item18[];
}

export interface Heading13 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item18 {
  node: Node2;
  score: number;
}

export interface Node2 {
  type: string;
  lhId: string;
  path: string;
  selector: string;
  boundingRect: BoundingRect2;
  snippet: string;
  nodeLabel: string;
}

export interface BoundingRect2 {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface LongTasks {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details23;
}

export interface Details23 {
  type: string;
  headings: Heading14[];
  items: Item19[];
}

export interface Heading14 {
  key: string;
  itemType: string;
  text: string;
  granularity?: number;
}

export interface Item19 {
  url: string;
  duration: number;
  startTime: number;
}

export interface NonCompositedAnimations {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  displayValue: string;
  details: Details24;
}

export interface Details24 {
  type: string;
  headings: Heading15[];
  items: Item20[];
}

export interface Heading15 {
  key?: string;
  itemType: string;
  subItemsHeading: SubItemsHeading2;
  text: string;
}

export interface SubItemsHeading2 {
  key: string;
  itemType: string;
}

export interface Item20 {
  node: Node3;
  subItems: SubItems2;
}

export interface Node3 {
  type: string;
  lhId: string;
  path: string;
  selector: string;
  boundingRect: BoundingRect3;
  snippet: string;
  nodeLabel: string;
}

export interface BoundingRect3 {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface SubItems2 {
  type: string;
  items: Item21[];
}

export interface Item21 {
  failureReason: string;
  animation: string;
}

export interface UnsizedImages {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  details: Details25;
}

export interface Details25 {
  type: string;
  headings: Heading16[];
  items: Item22[];
}

export interface Heading16 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item22 {
  url: string;
  node: Node4;
}

export interface Node4 {
  type: string;
  lhId: string;
  path: string;
  selector: string;
  boundingRect: BoundingRect4;
  snippet: string;
  nodeLabel: string;
}

export interface BoundingRect4 {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface PreloadLcpImage {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details26;
}

export interface Details26 {
  type: string;
  headings: Heading17[];
  items: Item23[];
  overallSavingsMs: number;
}

export interface Heading17 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item23 {
  url: string;
  wastedMs: number;
}

export interface FullPageScreenshot {
  id: string;
  title: string;
  description: string;
  score: any;
  scoreDisplayMode: string;
  details: Details27;
}

export interface Details27 {
  type: string;
  screenshot: Screenshot;
  nodes: Nodes;
}

export interface Screenshot {
  data: string;
  width: number;
  height: number;
}

export interface Nodes {
  'page-0-IMG': Page0Img;
  'page-1-IMG': Page1Img;
  'page-2-IMG': Page2Img;
  'page-3-IMG': Page3Img;
  'page-4-IMG': Page4Img;
  'page-5-IMG': Page5Img;
  'page-6-IMG': Page6Img;
  'page-7-IMG': Page7Img;
  'page-8-IMG': Page8Img;
  'page-9-IMG': Page9Img;
  'page-10-IMG': Page10Img;
  'page-11-IMG': Page11Img;
  'page-12-IMG': Page12Img;
  'page-13-IMG': Page13Img;
  'page-14-IMG': Page14Img;
  'page-15-IMG': Page15Img;
  'page-16-IMG': Page16Img;
  'page-17-IMG': Page17Img;
  'page-18-IMG': Page18Img;
  'page-19-IMG': Page19Img;
  'page-20-IMG': Page20Img;
  'page-21-IMG': Page21Img;
  'page-22-IMG': Page22Img;
  'page-23-IMG': Page23Img;
  'page-24-IMG': Page24Img;
  'page-25-IMG': Page25Img;
  'page-26-IMG': Page26Img;
  'page-27-IMG': Page27Img;
  'page-28-A': Page28A;
  'page-29-DIV': Page29Div;
  'page-30-DIV': Page30Div;
  'page-31-DIV': Page31Div;
  'page-32-DIV': Page32Div;
  'page-33-DIV': Page33Div;
  'page-34-path': Page34Path;
  'page-35-DIV': Page35Div;
  'page-36-DIV': Page36Div;
  'page-37-DIV': Page37Div;
  'page-38-path': Page38Path;
  'page-39-DIV': Page39Div;
  'page-40-DIV': Page40Div;
  '11-0-LINK': N110Link;
  '11-1-LINK': N111Link;
  '11-2-LINK': N112Link;
  '11-3-LINK': N113Link;
  '11-4-LINK': N114Link;
  '11-5-LINK': N115Link;
  '11-6-LINK': N116Link;
  '11-7-LINK': N117Link;
  '11-8-LINK': N118Link;
  '11-9-LINK': N119Link;
  '11-10-LINK': N1110Link;
  '11-11-LINK': N1111Link;
  '11-12-LINK': N1112Link;
  '11-13-LINK': N1113Link;
  '11-14-SCRIPT': N1114Script;
  '11-15-SCRIPT': N1115Script;
  '11-16-SCRIPT': N1116Script;
  '11-17-SCRIPT': N1117Script;
  '11-18-SCRIPT': N1118Script;
  '11-19-SCRIPT': N1119Script;
  '11-20-SCRIPT': N1120Script;
  '11-21-SCRIPT': N1121Script;
  '11-22-SCRIPT': N1122Script;
  '11-23-SCRIPT': N1123Script;
  '11-24-SCRIPT': N1124Script;
  '11-25-SCRIPT': N1125Script;
  '11-26-SCRIPT': N1126Script;
  '11-27-SCRIPT': N1127Script;
  '11-28-SCRIPT': N1128Script;
  '11-29-SCRIPT': N1129Script;
  '11-30-SCRIPT': N1130Script;
  '11-31-SCRIPT': N1131Script;
  '11-32-SCRIPT': N1132Script;
  '11-33-SCRIPT': N1133Script;
  '11-34-SCRIPT': N1134Script;
  '11-35-SCRIPT': N1135Script;
  '11-36-SCRIPT': N1136Script;
  '11-37-SCRIPT': N1137Script;
  '11-38-SCRIPT': N1138Script;
  '11-39-SCRIPT': N1139Script;
  '11-40-SCRIPT': N1140Script;
  '11-41-SCRIPT': N1141Script;
  '11-42-SCRIPT': N1142Script;
  '11-43-SCRIPT': N1143Script;
  '11-44-SCRIPT': N1144Script;
  '11-45-SCRIPT': N1145Script;
  '11-46-SCRIPT': N1146Script;
  '11-47-SCRIPT': N1147Script;
  '11-48-SCRIPT': N1148Script;
  '11-49-SCRIPT': N1149Script;
  '11-50-SCRIPT': N1150Script;
  '11-51-SCRIPT': N1151Script;
  '11-52-SCRIPT': N1152Script;
  '11-53-SCRIPT': N1153Script;
  '11-54-SCRIPT': N1154Script;
  '11-55-SCRIPT': N1155Script;
  '11-56-SCRIPT': N1156Script;
  '11-57-SCRIPT': N1157Script;
  '11-58-SCRIPT': N1158Script;
  '11-59-SCRIPT': N1159Script;
  '11-60-SCRIPT': N1160Script;
  '11-61-SCRIPT': N1161Script;
  '11-62-SCRIPT': N1162Script;
  '11-63-SCRIPT': N1163Script;
  '11-64-SCRIPT': N1164Script;
  '11-65-SCRIPT': N1165Script;
  '11-66-SCRIPT': N1166Script;
  '11-67-SCRIPT': N1167Script;
  '11-68-SCRIPT': N1168Script;
  '11-69-SCRIPT': N1169Script;
  '11-70-SCRIPT': N1170Script;
  '11-71-SCRIPT': N1171Script;
  '11-72-SCRIPT': N1172Script;
  '11-73-SCRIPT': N1173Script;
  '11-74-SCRIPT': N1174Script;
  '11-75-SCRIPT': N1175Script;
  '11-76-SCRIPT': N1176Script;
  '11-77-SCRIPT': N1177Script;
  '11-78-SCRIPT': N1178Script;
  '11-79-SCRIPT': N1179Script;
  '11-80-SCRIPT': N1180Script;
  '11-81-SCRIPT': N1181Script;
  '11-82-SCRIPT': N1182Script;
  '11-83-SCRIPT': N1183Script;
  '11-84-SCRIPT': N1184Script;
  '11-85-SCRIPT': N1185Script;
  '11-86-SCRIPT': N1186Script;
  '11-87-SCRIPT': N1187Script;
  '11-88-SCRIPT': N1188Script;
  '11-89-SCRIPT': N1189Script;
  '11-90-polygon': N1190Polygon;
  '11-91-BODY': N1191Body;
}

export interface Page0Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page1Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page2Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page3Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page4Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page5Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page6Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page7Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page8Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page9Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page10Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page11Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page12Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page13Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page14Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page15Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page16Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page17Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page18Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page19Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page20Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page21Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page22Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page23Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page24Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page25Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page26Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page27Img {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page28A {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page29Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page30Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page31Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page32Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page33Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page34Path {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page35Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page36Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page37Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page38Path {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page39Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface Page40Div {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N110Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N111Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N112Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N113Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N114Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N115Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N116Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N117Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N118Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N119Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1110Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1111Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1112Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1113Link {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1114Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1115Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1116Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1117Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1118Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1119Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1120Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1121Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1122Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1123Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1124Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1125Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1126Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1127Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1128Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1129Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1130Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1131Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1132Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1133Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1134Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1135Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1136Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1137Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1138Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1139Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1140Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1141Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1142Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1143Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1144Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1145Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1146Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1147Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1148Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1149Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1150Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1151Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1152Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1153Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1154Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1155Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1156Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1157Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1158Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1159Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1160Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1161Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1162Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1163Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1164Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1165Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1166Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1167Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1168Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1169Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1170Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1171Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1172Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1173Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1174Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1175Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1176Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1177Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1178Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1179Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1180Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1181Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1182Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1183Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1184Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1185Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1186Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1187Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1188Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1189Script {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1190Polygon {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface N1191Body {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface UsesLongCacheTtl {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details28;
}

export interface Details28 {
  type: string;
  headings: Heading18[];
  items: Item24[];
  summary: Summary3;
}

export interface Heading18 {
  key: string;
  itemType: string;
  text: string;
  displayUnit?: string;
  granularity?: number;
}

export interface Item24 {
  url: string;
  cacheLifetimeMs: number;
  cacheHitProbability: number;
  totalBytes: number;
  wastedBytes: number;
  debugData?: DebugData;
}

export interface DebugData {
  type: string;
  'max-age': number;
  public?: boolean;
  's-maxage'?: string;
  'stale-while-revalidate'?: string;
  'stale-if-error'?: string;
}

export interface Summary3 {
  wastedBytes: number;
}

export interface TotalByteWeight {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details29;
}

export interface Details29 {
  type: string;
  headings: Heading19[];
  items: Item25[];
}

export interface Heading19 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item25 {
  url: string;
  totalBytes: number;
}

export interface OffscreenImages {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  warnings: any[];
  details: Details30;
}

export interface Details30 {
  type: string;
  headings: Heading20[];
  items: Item26[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading20 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item26 {
  url: string;
  requestStartTime: number;
  totalBytes: number;
  wastedBytes: number;
  wastedPercent: number;
}

export interface RenderBlockingResources {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details31;
}

export interface Details31 {
  type: string;
  headings: Heading21[];
  items: Item27[];
  overallSavingsMs: number;
}

export interface Heading21 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item27 {
  url: string;
  totalBytes: number;
  wastedMs: number;
}

export interface UnminifiedCss {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details32;
}

export interface Details32 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface UnminifiedJavascript {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  warnings: any[];
  details: Details33;
}

export interface Details33 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface UnusedCssRules {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details34;
}

export interface Details34 {
  type: string;
  headings: Heading22[];
  items: Item28[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading22 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item28 {
  url: string;
  wastedBytes: number;
  wastedPercent: number;
  totalBytes: number;
}

export interface UnusedJavascript {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details35;
}

export interface Details35 {
  type: string;
  headings: Heading23[];
  items: Item29[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading23 {
  key: string;
  valueType: string;
  subItemsHeading: SubItemsHeading3;
  label: string;
}

export interface SubItemsHeading3 {
  key: string;
  valueType?: string;
}

export interface Item29 {
  url: string;
  totalBytes: number;
  wastedBytes: number;
  wastedPercent: number;
  subItems?: SubItems3;
}

export interface SubItems3 {
  type: string;
  items: Item30[];
}

export interface Item30 {
  source: string;
  sourceBytes: number;
  sourceWastedBytes: number;
}

export interface UsesWebpImages {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  warnings: any[];
  details: Details36;
}

export interface Details36 {
  type: string;
  headings: Heading24[];
  items: Item31[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading24 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item31 {
  url: string;
  fromProtocol: boolean;
  isCrossOrigin: boolean;
  totalBytes: number;
  wastedBytes: number;
}

export interface UsesOptimizedImages {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  warnings: any[];
  details: Details37;
}

export interface Details37 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface UsesTextCompression {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details38;
}

export interface Details38 {
  type: string;
  headings: Heading25[];
  items: Item32[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading25 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item32 {
  url: string;
  totalBytes: number;
  wastedBytes: number;
}

export interface UsesResponsiveImages {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details39;
}

export interface Details39 {
  type: string;
  headings: Heading26[];
  items: Item33[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading26 {
  key: string;
  valueType: string;
  label: string;
}

export interface Item33 {
  url: string;
  totalBytes: number;
  wastedBytes: number;
  wastedPercent: number;
}

export interface EfficientAnimatedContent {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details40;
}

export interface Details40 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface DuplicatedJavascript {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details41;
}

export interface Details41 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface LegacyJavascript {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details42;
}

export interface Details42 {
  type: string;
  headings: Heading27[];
  items: Item34[];
  overallSavingsMs: number;
  overallSavingsBytes: number;
}

export interface Heading27 {
  key?: string;
  valueType: string;
  subItemsHeading?: SubItemsHeading4;
  label: string;
}

export interface SubItemsHeading4 {
  key: string;
  valueType?: string;
}

export interface Item34 {
  url: string;
  wastedBytes: number;
  subItems: SubItems4;
  totalBytes: number;
}

export interface SubItems4 {
  type: string;
  items: Item35[];
}

export interface Item35 {
  signal: string;
  location: Location;
}

export interface Location {
  type: string;
  url: string;
  line: number;
  column: number;
  original?: Original;
  urlProvider: string;
}

export interface Original {
  file: string;
  line: number;
  column: number;
}

export interface DomSize {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  displayValue: string;
  details: Details43;
}

export interface Details43 {
  type: string;
  headings: Heading28[];
  items: Item36[];
}

export interface Heading28 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item36 {
  statistic: string;
  value: number;
  node?: Node5;
}

export interface Node5 {
  type: string;
  lhId: string;
  path: string;
  selector: string;
  boundingRect: BoundingRect5;
  snippet: string;
  nodeLabel: string;
}

export interface BoundingRect5 {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
}

export interface NoDocumentWrite {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  details: Details44;
}

export interface Details44 {
  type: string;
  headings: Heading29[];
  items: Item37[];
}

export interface Heading29 {
  key: string;
  itemType: string;
  text: string;
}

export interface Item37 {
  source: Source;
}

export interface Source {
  type: string;
  url: string;
  urlProvider: string;
  line: number;
  column: number;
}

export interface UsesHttp2 {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  numericValue: number;
  numericUnit: string;
  details: Details45;
}

export interface Details45 {
  type: string;
  headings: any[];
  items: any[];
  overallSavingsMs: number;
}

export interface UsesPassiveEventListeners {
  id: string;
  title: string;
  description: string;
  score: number;
  scoreDisplayMode: string;
  details: Details46;
}

export interface Details46 {
  type: string;
  headings: any[];
  items: any[];
}

export interface ConfigSettings {
  output: string;
  maxWaitForFcp: number;
  maxWaitForLoad: number;
  formFactor: string;
  throttling: Throttling;
  throttlingMethod: string;
  screenEmulation: ScreenEmulation;
  emulatedUserAgent: string;
  auditMode: boolean;
  gatherMode: boolean;
  disableStorageReset: boolean;
  channel: string;
  budgets: any;
  locale: string;
  blockedUrlPatterns: any;
  additionalTraceCategories: any;
  extraHeaders: any;
  precomputedLanternData: any;
  onlyAudits: any;
  onlyCategories: string[];
  skipAudits: any;
}

export interface Throttling {
  rttMs: number;
  throughputKbps: number;
  requestLatencyMs: number;
  downloadThroughputKbps: number;
  uploadThroughputKbps: number;
  cpuSlowdownMultiplier: number;
}

export interface ScreenEmulation {
  mobile: boolean;
  width: number;
  height: number;
  deviceScaleFactor: number;
  disabled: boolean;
}

export interface Categories {
  performance: Performance;
}

export interface Performance {
  title: string;
  auditRefs: AuditRef[];
  id: string;
  score: number;
}

export interface AuditRef {
  id: string;
  weight: number;
  group?: string;
}

export interface CategoryGroups {
  metrics: Metrics2;
  'load-opportunities': LoadOpportunities;
  budgets: Budgets;
  diagnostics: Diagnostics2;
  'pwa-installable': PwaInstallable;
  'pwa-optimized': PwaOptimized;
  'a11y-best-practices': A11YBestPractices;
  'a11y-color-contrast': A11YColorContrast;
  'a11y-names-labels': A11YNamesLabels;
  'a11y-navigation': A11YNavigation;
  'a11y-aria': A11YAria;
  'a11y-language': A11YLanguage;
  'a11y-audio-video': A11YAudioVideo;
  'a11y-tables-lists': A11YTablesLists;
  'seo-mobile': SeoMobile;
  'seo-content': SeoContent;
  'seo-crawl': SeoCrawl;
  'best-practices-trust-safety': BestPracticesTrustSafety;
  'best-practices-ux': BestPracticesUx;
  'best-practices-browser-compat': BestPracticesBrowserCompat;
  'best-practices-general': BestPracticesGeneral;
}

export interface Metrics2 {
  title: string;
}

export interface LoadOpportunities {
  title: string;
  description: string;
}

export interface Budgets {
  title: string;
  description: string;
}

export interface Diagnostics2 {
  title: string;
  description: string;
}

export interface PwaInstallable {
  title: string;
}

export interface PwaOptimized {
  title: string;
}

export interface A11YBestPractices {
  title: string;
  description: string;
}

export interface A11YColorContrast {
  title: string;
  description: string;
}

export interface A11YNamesLabels {
  title: string;
  description: string;
}

export interface A11YNavigation {
  title: string;
  description: string;
}

export interface A11YAria {
  title: string;
  description: string;
}

export interface A11YLanguage {
  title: string;
  description: string;
}

export interface A11YAudioVideo {
  title: string;
  description: string;
}

export interface A11YTablesLists {
  title: string;
  description: string;
}

export interface SeoMobile {
  title: string;
  description: string;
}

export interface SeoContent {
  title: string;
  description: string;
}

export interface SeoCrawl {
  title: string;
  description: string;
}

export interface BestPracticesTrustSafety {
  title: string;
}

export interface BestPracticesUx {
  title: string;
}

export interface BestPracticesBrowserCompat {
  title: string;
}

export interface BestPracticesGeneral {
  title: string;
}

export interface Timing {
  entries: Entry[];
  total: number;
}

export interface Entry {
  startTime: number;
  name: string;
  duration: number;
  entryType: string;
}

export interface I18N {
  rendererFormattedStrings: RendererFormattedStrings;
  icuMessagePaths: IcuMessagePaths;
}

export interface RendererFormattedStrings {
  calculatorLink: string;
  crcInitialNavigation: string;
  crcLongestDurationLabel: string;
  dropdownCopyJSON: string;
  dropdownDarkTheme: string;
  dropdownPrintExpanded: string;
  dropdownPrintSummary: string;
  dropdownSaveGist: string;
  dropdownSaveHTML: string;
  dropdownSaveJSON: string;
  dropdownViewer: string;
  errorLabel: string;
  errorMissingAuditInfo: string;
  footerIssue: string;
  labDataTitle: string;
  lsPerformanceCategoryDescription: string;
  manualAuditsGroupTitle: string;
  notApplicableAuditsGroupTitle: string;
  opportunityResourceColumnLabel: string;
  opportunitySavingsColumnLabel: string;
  passedAuditsGroupTitle: string;
  runtimeDesktopEmulation: string;
  runtimeMobileEmulation: string;
  runtimeNoEmulation: string;
  runtimeSettingsAxeVersion: string;
  runtimeSettingsBenchmark: string;
  runtimeSettingsChannel: string;
  runtimeSettingsCPUThrottling: string;
  runtimeSettingsDevice: string;
  runtimeSettingsFetchTime: string;
  runtimeSettingsNetworkThrottling: string;
  runtimeSettingsTitle: string;
  runtimeSettingsUA: string;
  runtimeSettingsUANetwork: string;
  runtimeSettingsUrl: string;
  runtimeUnknown: string;
  snippetCollapseButtonLabel: string;
  snippetExpandButtonLabel: string;
  thirdPartyResourcesLabel: string;
  throttlingProvided: string;
  toplevelWarningsMessage: string;
  varianceDisclaimer: string;
  warningAuditsGroupTitle: string;
  warningHeader: string;
}

export interface IcuMessagePaths {
  'lighthouse-core/lib/i18n/i18n.js | firstContentfulPaintMetric': string[];
  'lighthouse-core/audits/metrics/first-contentful-paint.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | seconds': Second[];
  'lighthouse-core/lib/i18n/i18n.js | largestContentfulPaintMetric': string[];
  'lighthouse-core/audits/metrics/largest-contentful-paint.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | firstMeaningfulPaintMetric': string[];
  'lighthouse-core/audits/metrics/first-meaningful-paint.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | speedIndexMetric': string[];
  'lighthouse-core/audits/metrics/speed-index.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | estimatedInputLatencyMetric': string[];
  'lighthouse-core/audits/metrics/estimated-input-latency.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | ms': M[];
  'lighthouse-core/lib/i18n/i18n.js | totalBlockingTimeMetric': string[];
  'lighthouse-core/audits/metrics/total-blocking-time.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | maxPotentialFIDMetric': string[];
  'lighthouse-core/audits/metrics/max-potential-fid.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | cumulativeLayoutShiftMetric': string[];
  'lighthouse-core/audits/metrics/cumulative-layout-shift.js | description': string[];
  'lighthouse-core/audits/server-response-time.js | failureTitle': string[];
  'lighthouse-core/audits/server-response-time.js | description': string[];
  'lighthouse-core/audits/server-response-time.js | displayValue': LighthouseCoreAuditsServerResponseTimeJsDisplayValue[];
  'lighthouse-core/lib/i18n/i18n.js | columnURL': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnTimeSpent': string[];
  'lighthouse-core/lib/i18n/i18n.js | firstCPUIdleMetric': string[];
  'lighthouse-core/audits/metrics/first-cpu-idle.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | interactiveMetric': string[];
  'lighthouse-core/audits/metrics/interactive.js | description': string[];
  'lighthouse-core/audits/user-timings.js | title': string[];
  'lighthouse-core/audits/user-timings.js | description': string[];
  'lighthouse-core/audits/critical-request-chains.js | title': string[];
  'lighthouse-core/audits/critical-request-chains.js | description': string[];
  'lighthouse-core/audits/critical-request-chains.js | displayValue': LighthouseCoreAuditsCriticalRequestChainsJsDisplayValue[];
  'lighthouse-core/audits/redirects.js | title': string[];
  'lighthouse-core/audits/redirects.js | description': string[];
  'lighthouse-core/audits/mainthread-work-breakdown.js | failureTitle': string[];
  'lighthouse-core/audits/mainthread-work-breakdown.js | description': string[];
  'lighthouse-core/audits/mainthread-work-breakdown.js | columnCategory': string[];
  'lighthouse-core/audits/bootup-time.js | failureTitle': string[];
  'lighthouse-core/audits/bootup-time.js | description': string[];
  'lighthouse-core/audits/bootup-time.js | columnTotal': string[];
  'lighthouse-core/audits/bootup-time.js | columnScriptEval': string[];
  'lighthouse-core/audits/bootup-time.js | columnScriptParse': string[];
  'lighthouse-core/audits/uses-rel-preload.js | title': string[];
  'lighthouse-core/audits/uses-rel-preload.js | description': string[];
  'lighthouse-core/audits/uses-rel-preconnect.js | title': string[];
  'lighthouse-core/audits/uses-rel-preconnect.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | displayValueMsSavings': DisplayValueMsSaving[];
  'lighthouse-core/lib/i18n/i18n.js | columnWastedBytes': string[];
  'lighthouse-core/audits/font-display.js | failureTitle': string[];
  'lighthouse-core/audits/font-display.js | description': string[];
  'lighthouse-core/audits/network-rtt.js | title': string[];
  'lighthouse-core/audits/network-rtt.js | description': string[];
  'lighthouse-core/audits/network-server-latency.js | title': string[];
  'lighthouse-core/audits/network-server-latency.js | description': string[];
  'lighthouse-core/audits/performance-budget.js | title': string[];
  'lighthouse-core/audits/performance-budget.js | description': string[];
  'lighthouse-core/audits/timing-budget.js | title': string[];
  'lighthouse-core/audits/timing-budget.js | description': string[];
  'lighthouse-core/audits/resource-summary.js | title': string[];
  'lighthouse-core/audits/resource-summary.js | description': string[];
  'lighthouse-core/audits/resource-summary.js | displayValue': LighthouseCoreAuditsResourceSummaryJsDisplayValue[];
  'lighthouse-core/lib/i18n/i18n.js | columnResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnRequests': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnTransferSize': string[];
  'lighthouse-core/lib/i18n/i18n.js | totalResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | imageResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | scriptResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | otherResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | stylesheetResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | fontResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | documentResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | mediaResourceType': string[];
  'lighthouse-core/lib/i18n/i18n.js | thirdPartyResourceType': string[];
  'lighthouse-core/audits/third-party-summary.js | failureTitle': string[];
  'lighthouse-core/audits/third-party-summary.js | description': string[];
  'lighthouse-core/audits/third-party-summary.js | displayValue': LighthouseCoreAuditsThirdPartySummaryJsDisplayValue[];
  'lighthouse-core/audits/third-party-summary.js | columnThirdParty': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnBlockingTime': string[];
  'lighthouse-core/lib/i18n/i18n.js | otherResourcesLabel': string[];
  'lighthouse-core/audits/third-party-facades.js | title': string[];
  'lighthouse-core/audits/third-party-facades.js | description': string[];
  'lighthouse-core/audits/largest-contentful-paint-element.js | title': string[];
  'lighthouse-core/audits/largest-contentful-paint-element.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | displayValueElementsFound': LighthouseCoreLibI18NI18NJsDisplayValueElementsFound[];
  'lighthouse-core/lib/i18n/i18n.js | columnElement': string[];
  'lighthouse-core/audits/layout-shift-elements.js | title': string[];
  'lighthouse-core/audits/layout-shift-elements.js | description': string[];
  'lighthouse-core/audits/layout-shift-elements.js | columnContribution': string[];
  'lighthouse-core/audits/long-tasks.js | title': string[];
  'lighthouse-core/audits/long-tasks.js | description': string[];
  'lighthouse-core/audits/long-tasks.js | displayValue': LighthouseCoreAuditsLongTasksJsDisplayValue[];
  'lighthouse-core/lib/i18n/i18n.js | columnStartTime': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnDuration': string[];
  'lighthouse-core/audits/non-composited-animations.js | title': string[];
  'lighthouse-core/audits/non-composited-animations.js | description': string[];
  'lighthouse-core/audits/non-composited-animations.js | displayValue': LighthouseCoreAuditsNonCompositedAnimationsJsDisplayValue[];
  'lighthouse-core/lib/i18n/i18n.js | columnName': string[];
  'lighthouse-core/audits/non-composited-animations.js | unsupportedCSSProperty': LighthouseCoreAuditsNonCompositedAnimationsJsUnsupportedCssproperty[];
  'lighthouse-core/audits/unsized-images.js | failureTitle': string[];
  'lighthouse-core/audits/unsized-images.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnFailingElem': string[];
  'lighthouse-core/audits/preload-lcp-image.js | title': string[];
  'lighthouse-core/audits/preload-lcp-image.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | failureTitle': string[];
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-long-cache-ttl.js | displayValue': LighthouseCoreAuditsByteEfficiencyUsesLongCacheTtlJsDisplayValue[];
  'lighthouse-core/lib/i18n/i18n.js | columnCacheTTL': string[];
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | failureTitle': string[];
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/total-byte-weight.js | displayValue': LighthouseCoreAuditsByteEfficiencyTotalByteWeightJsDisplayValue[];
  'lighthouse-core/audits/byte-efficiency/offscreen-images.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/offscreen-images.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | displayValueByteSavings': DisplayValueByteSaving[];
  'lighthouse-core/lib/i18n/i18n.js | columnResourceSize': string[];
  'lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/render-blocking-resources.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/unminified-css.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/unminified-css.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/unminified-javascript.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/unminified-javascript.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/unused-css-rules.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/unused-css-rules.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/unused-javascript.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/unused-javascript.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-webp-images.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/uses-webp-images.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/uses-optimized-images.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-text-compression.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/uses-text-compression.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/uses-responsive-images.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/efficient-animated-content.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/duplicated-javascript.js | description': string[];
  'lighthouse-core/audits/byte-efficiency/legacy-javascript.js | title': string[];
  'lighthouse-core/audits/byte-efficiency/legacy-javascript.js | description': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | title': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | description': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | displayValue': LighthouseCoreAuditsDobetterwebDomSizeJsDisplayValue[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | columnStatistic': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | columnValue': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMElements': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMDepth': string[];
  'lighthouse-core/audits/dobetterweb/dom-size.js | statisticDOMWidth': string[];
  'lighthouse-core/audits/dobetterweb/no-document-write.js | failureTitle': string[];
  'lighthouse-core/audits/dobetterweb/no-document-write.js | description': string[];
  'lighthouse-core/lib/i18n/i18n.js | columnSource': string[];
  'lighthouse-core/audits/dobetterweb/uses-http2.js | title': string[];
  'lighthouse-core/audits/dobetterweb/uses-http2.js | description': string[];
  'lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | title': string[];
  'lighthouse-core/audits/dobetterweb/uses-passive-event-listeners.js | description': string[];
  'lighthouse-core/config/default-config.js | performanceCategoryTitle': string[];
  'lighthouse-core/config/default-config.js | metricGroupTitle': string[];
  'lighthouse-core/config/default-config.js | loadOpportunitiesGroupTitle': string[];
  'lighthouse-core/config/default-config.js | loadOpportunitiesGroupDescription': string[];
  'lighthouse-core/config/default-config.js | budgetsGroupTitle': string[];
  'lighthouse-core/config/default-config.js | budgetsGroupDescription': string[];
  'lighthouse-core/config/default-config.js | diagnosticsGroupTitle': string[];
  'lighthouse-core/config/default-config.js | diagnosticsGroupDescription': string[];
  'lighthouse-core/config/default-config.js | pwaInstallableGroupTitle': string[];
  'lighthouse-core/config/default-config.js | pwaOptimizedGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yBestPracticesGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yBestPracticesGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yColorContrastGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yColorContrastGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yNamesLabelsGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yNamesLabelsGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yNavigationGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yNavigationGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yAriaGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yAriaGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yLanguageGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yLanguageGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yAudioVideoGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yAudioVideoGroupDescription': string[];
  'lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupTitle': string[];
  'lighthouse-core/config/default-config.js | a11yTablesListsVideoGroupDescription': string[];
  'lighthouse-core/config/default-config.js | seoMobileGroupTitle': string[];
  'lighthouse-core/config/default-config.js | seoMobileGroupDescription': string[];
  'lighthouse-core/config/default-config.js | seoContentGroupTitle': string[];
  'lighthouse-core/config/default-config.js | seoContentGroupDescription': string[];
  'lighthouse-core/config/default-config.js | seoCrawlingGroupTitle': string[];
  'lighthouse-core/config/default-config.js | seoCrawlingGroupDescription': string[];
  'lighthouse-core/config/default-config.js | bestPracticesTrustSafetyGroupTitle': string[];
  'lighthouse-core/config/default-config.js | bestPracticesUXGroupTitle': string[];
  'lighthouse-core/config/default-config.js | bestPracticesBrowserCompatGroupTitle': string[];
  'lighthouse-core/config/default-config.js | bestPracticesGeneralGroupTitle': string[];
  '../lighthouse-stack-packs/packs/react.js | unminified-css': string[];
  '../lighthouse-stack-packs/packs/react.js | unminified-javascript': string[];
  '../lighthouse-stack-packs/packs/react.js | unused-javascript': string[];
  '../lighthouse-stack-packs/packs/react.js | time-to-first-byte': string[];
  '../lighthouse-stack-packs/packs/react.js | redirects': string[];
  '../lighthouse-stack-packs/packs/react.js | user-timings': string[];
  '../lighthouse-stack-packs/packs/react.js | dom-size': string[];
}

export interface Second {
  values: Values;
  path: string;
}

export interface Values {
  timeInMs: number;
}

export interface M {
  values: Values2;
  path: string;
}

export interface Values2 {
  timeInMs: number;
}

export interface LighthouseCoreAuditsServerResponseTimeJsDisplayValue {
  values: Values3;
  path: string;
}

export interface Values3 {
  timeInMs: number;
}

export interface LighthouseCoreAuditsCriticalRequestChainsJsDisplayValue {
  values: Values4;
  path: string;
}

export interface Values4 {
  itemCount: number;
}

export interface DisplayValueMsSaving {
  values: Values5;
  path: string;
}

export interface Values5 {
  wastedMs: number;
}

export interface LighthouseCoreAuditsResourceSummaryJsDisplayValue {
  values: Values6;
  path: string;
}

export interface Values6 {
  requestCount: number;
  byteCount: number;
}

export interface LighthouseCoreAuditsThirdPartySummaryJsDisplayValue {
  values: Values7;
  path: string;
}

export interface Values7 {
  timeInMs: number;
}

export interface LighthouseCoreLibI18NI18NJsDisplayValueElementsFound {
  values: Values8;
  path: string;
}

export interface Values8 {
  nodeCount: number;
}

export interface LighthouseCoreAuditsLongTasksJsDisplayValue {
  values: Values9;
  path: string;
}

export interface Values9 {
  itemCount: number;
}

export interface LighthouseCoreAuditsNonCompositedAnimationsJsDisplayValue {
  values: Values10;
  path: string;
}

export interface Values10 {
  itemCount: number;
}

export interface LighthouseCoreAuditsNonCompositedAnimationsJsUnsupportedCssproperty {
  values: Values11;
  path: string;
}

export interface Values11 {
  propertyCount: number;
  properties: string;
}

export interface LighthouseCoreAuditsByteEfficiencyUsesLongCacheTtlJsDisplayValue {
  values: Values12;
  path: string;
}

export interface Values12 {
  itemCount: number;
}

export interface LighthouseCoreAuditsByteEfficiencyTotalByteWeightJsDisplayValue {
  values: Values13;
  path: string;
}

export interface Values13 {
  totalBytes: number;
}

export interface DisplayValueByteSaving {
  values: Values14;
  path: string;
}

export interface Values14 {
  wastedBytes: number;
}

export interface LighthouseCoreAuditsDobetterwebDomSizeJsDisplayValue {
  values: Values15;
  path: string;
}

export interface Values15 {
  itemCount: number;
}

export interface StackPack {
  id: string;
  title: string;
  iconDataURL: string;
  descriptions: Descriptions;
}

export interface Descriptions {
  'unminified-css': string;
  'unminified-javascript': string;
  'unused-javascript': string;
  'time-to-first-byte': string;
  redirects: string;
  'user-timings': string;
  'dom-size': string;
}
