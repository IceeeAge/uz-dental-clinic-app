import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Hex: { input: any; output: any; }
  Json: { input: any; output: any; }
  Long: { input: any; output: any; }
  RGBAHue: { input: any; output: any; }
  RGBATransparency: { input: any; output: any; }
  RichTextAST: { input: any; output: any; }
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int']['output'];
};

/** Asset system model */
export type Asset = Entity & Node & {
  __typename?: 'Asset';
  chartingNewSchedule: Array<NewSchedule>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  eFormPdfRequestUserEformPdf: Array<RequestUserEformPdf>;
  /** The file name */
  fileName: Scalars['String']['output'];
  /** The file handle */
  handle: Scalars['String']['output'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  imageGetSlider: Array<GetSlider>;
  imageTipsGuide: Array<TipsGuide>;
  imagesNewsFeed: Array<NewsFeed>;
  imagesUzLab: Array<UzLab>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>;
  profileImageMedicalTeam: Array<MedicalTeam>;
  profileImagePatient: Array<Patient>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
  upload?: Maybe<AssetUpload>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output'];
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>;
};


/** Asset system model */
export type AssetChartingNewScheduleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NewScheduleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewScheduleWhereInput>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetEFormPdfRequestUserEformPdfArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<RequestUserEformPdfOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestUserEformPdfWhereInput>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetImageGetSliderArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<GetSliderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GetSliderWhereInput>;
};


/** Asset system model */
export type AssetImageTipsGuideArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<TipsGuideOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipsGuideWhereInput>;
};


/** Asset system model */
export type AssetImagesNewsFeedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NewsFeedOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFeedWhereInput>;
};


/** Asset system model */
export type AssetImagesUzLabArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<UzLabOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UzLabWhereInput>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetProfileImageMedicalTeamArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MedicalTeamOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MedicalTeamWhereInput>;
};


/** Asset system model */
export type AssetProfileImagePatientArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PatientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PatientWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  chartingNewSchedule?: InputMaybe<NewScheduleCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eFormPdfRequestUserEformPdf?: InputMaybe<RequestUserEformPdfCreateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageGetSlider?: InputMaybe<GetSliderCreateManyInlineInput>;
  imageTipsGuide?: InputMaybe<TipsGuideCreateManyInlineInput>;
  imagesNewsFeed?: InputMaybe<NewsFeedCreateManyInlineInput>;
  imagesUzLab?: InputMaybe<UzLabCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  profileImageMedicalTeam?: InputMaybe<MedicalTeamCreateManyInlineInput>;
  profileImagePatient?: InputMaybe<PatientCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chartingNewSchedule_every?: InputMaybe<NewScheduleWhereInput>;
  chartingNewSchedule_none?: InputMaybe<NewScheduleWhereInput>;
  chartingNewSchedule_some?: InputMaybe<NewScheduleWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  eFormPdfRequestUserEformPdf_every?: InputMaybe<RequestUserEformPdfWhereInput>;
  eFormPdfRequestUserEformPdf_none?: InputMaybe<RequestUserEformPdfWhereInput>;
  eFormPdfRequestUserEformPdf_some?: InputMaybe<RequestUserEformPdfWhereInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageGetSlider_every?: InputMaybe<GetSliderWhereInput>;
  imageGetSlider_none?: InputMaybe<GetSliderWhereInput>;
  imageGetSlider_some?: InputMaybe<GetSliderWhereInput>;
  imageTipsGuide_every?: InputMaybe<TipsGuideWhereInput>;
  imageTipsGuide_none?: InputMaybe<TipsGuideWhereInput>;
  imageTipsGuide_some?: InputMaybe<TipsGuideWhereInput>;
  imagesNewsFeed_every?: InputMaybe<NewsFeedWhereInput>;
  imagesNewsFeed_none?: InputMaybe<NewsFeedWhereInput>;
  imagesNewsFeed_some?: InputMaybe<NewsFeedWhereInput>;
  imagesUzLab_every?: InputMaybe<UzLabWhereInput>;
  imagesUzLab_none?: InputMaybe<UzLabWhereInput>;
  imagesUzLab_some?: InputMaybe<UzLabWhereInput>;
  profileImageMedicalTeam_every?: InputMaybe<MedicalTeamWhereInput>;
  profileImageMedicalTeam_none?: InputMaybe<MedicalTeamWhereInput>;
  profileImageMedicalTeam_some?: InputMaybe<MedicalTeamWhereInput>;
  profileImagePatient_every?: InputMaybe<PatientWhereInput>;
  profileImagePatient_none?: InputMaybe<PatientWhereInput>;
  profileImagePatient_some?: InputMaybe<PatientWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>;
  upload?: InputMaybe<AssetUploadWhereInput>;
};

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetUpdateInput = {
  chartingNewSchedule?: InputMaybe<NewScheduleUpdateManyInlineInput>;
  eFormPdfRequestUserEformPdf?: InputMaybe<RequestUserEformPdfUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageGetSlider?: InputMaybe<GetSliderUpdateManyInlineInput>;
  imageTipsGuide?: InputMaybe<TipsGuideUpdateManyInlineInput>;
  imagesNewsFeed?: InputMaybe<NewsFeedUpdateManyInlineInput>;
  imagesUzLab?: InputMaybe<UzLabUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  profileImageMedicalTeam?: InputMaybe<MedicalTeamUpdateManyInlineInput>;
  profileImagePatient?: InputMaybe<PatientUpdateManyInlineInput>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload';
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>;
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>;
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>;
};

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError';
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData';
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output'];
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output'];
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output'];
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output'];
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output'];
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>;
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output'];
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output'];
};

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<AssetUploadStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  chartingNewSchedule_every?: InputMaybe<NewScheduleWhereInput>;
  chartingNewSchedule_none?: InputMaybe<NewScheduleWhereInput>;
  chartingNewSchedule_some?: InputMaybe<NewScheduleWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  eFormPdfRequestUserEformPdf_every?: InputMaybe<RequestUserEformPdfWhereInput>;
  eFormPdfRequestUserEformPdf_none?: InputMaybe<RequestUserEformPdfWhereInput>;
  eFormPdfRequestUserEformPdf_some?: InputMaybe<RequestUserEformPdfWhereInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  imageGetSlider_every?: InputMaybe<GetSliderWhereInput>;
  imageGetSlider_none?: InputMaybe<GetSliderWhereInput>;
  imageGetSlider_some?: InputMaybe<GetSliderWhereInput>;
  imageTipsGuide_every?: InputMaybe<TipsGuideWhereInput>;
  imageTipsGuide_none?: InputMaybe<TipsGuideWhereInput>;
  imageTipsGuide_some?: InputMaybe<TipsGuideWhereInput>;
  imagesNewsFeed_every?: InputMaybe<NewsFeedWhereInput>;
  imagesNewsFeed_none?: InputMaybe<NewsFeedWhereInput>;
  imagesNewsFeed_some?: InputMaybe<NewsFeedWhereInput>;
  imagesUzLab_every?: InputMaybe<UzLabWhereInput>;
  imagesUzLab_none?: InputMaybe<UzLabWhereInput>;
  imagesUzLab_some?: InputMaybe<UzLabWhereInput>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileImageMedicalTeam_every?: InputMaybe<MedicalTeamWhereInput>;
  profileImageMedicalTeam_none?: InputMaybe<MedicalTeamWhereInput>;
  profileImageMedicalTeam_some?: InputMaybe<MedicalTeamWhereInput>;
  profileImagePatient_every?: InputMaybe<PatientWhereInput>;
  profileImagePatient_none?: InputMaybe<PatientWhereInput>;
  profileImagePatient_some?: InputMaybe<PatientWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  upload?: InputMaybe<AssetUploadWhereInput>;
  width?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output'];
};

export type Checkbox = Entity & {
  __typename?: 'Checkbox';
  checkbox?: Maybe<CheckboxcheckboxUnion>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** System stage field */
  stage: Stage;
};


export type CheckboxCheckboxArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CheckboxConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CheckboxWhereUniqueInput;
};

/** A connection to a list of items. */
export type CheckboxConnection = {
  __typename?: 'CheckboxConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CheckboxEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CheckboxCreateInput = {
  checkbox?: InputMaybe<CheckboxcheckboxUnionCreateOneInlineInput>;
};

export type CheckboxCreateManyInlineInput = {
  /** Create and connect multiple existing Checkbox documents */
  create?: InputMaybe<Array<CheckboxCreateInput>>;
};

export type CheckboxCreateOneInlineInput = {
  /** Create and connect one Checkbox document */
  create?: InputMaybe<CheckboxCreateInput>;
};

export type CheckboxCreateWithPositionInput = {
  /** Document to create */
  data: CheckboxCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type CheckboxEdge = {
  __typename?: 'CheckboxEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Checkbox;
};

/** Identifies documents */
export type CheckboxManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  checkbox?: InputMaybe<CheckboxcheckboxUnionWhereInput>;
  /** All values in which the union is empty. */
  checkbox_empty?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export enum CheckboxOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type CheckboxParent = Checkbox;

export type CheckboxParentConnectInput = {
  Checkbox?: InputMaybe<CheckboxConnectInput>;
};

export type CheckboxParentCreateInput = {
  Checkbox?: InputMaybe<CheckboxCreateInput>;
};

export type CheckboxParentCreateManyInlineInput = {
  /** Create and connect multiple existing CheckboxParent documents */
  create?: InputMaybe<Array<CheckboxParentCreateInput>>;
};

export type CheckboxParentCreateOneInlineInput = {
  /** Create and connect one CheckboxParent document */
  create?: InputMaybe<CheckboxParentCreateInput>;
};

export type CheckboxParentCreateWithPositionInput = {
  Checkbox?: InputMaybe<CheckboxCreateWithPositionInput>;
};

export type CheckboxParentUpdateInput = {
  Checkbox?: InputMaybe<CheckboxUpdateInput>;
};

export type CheckboxParentUpdateManyInlineInput = {
  /** Create and connect multiple CheckboxParent component instances */
  create?: InputMaybe<Array<CheckboxParentCreateWithPositionInput>>;
  /** Delete multiple CheckboxParent documents */
  delete?: InputMaybe<Array<CheckboxParentWhereUniqueInput>>;
  /** Update multiple CheckboxParent component instances */
  update?: InputMaybe<Array<CheckboxParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CheckboxParent component instances */
  upsert?: InputMaybe<Array<CheckboxParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CheckboxParentUpdateManyWithNestedWhereInput = {
  Checkbox?: InputMaybe<CheckboxUpdateManyWithNestedWhereInput>;
};

export type CheckboxParentUpdateOneInlineInput = {
  /** Create and connect one CheckboxParent document */
  create?: InputMaybe<CheckboxParentCreateInput>;
  /** Delete currently connected CheckboxParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CheckboxParent document */
  update?: InputMaybe<CheckboxParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CheckboxParent document */
  upsert?: InputMaybe<CheckboxParentUpsertWithNestedWhereUniqueInput>;
};

export type CheckboxParentUpdateWithNestedWhereUniqueAndPositionInput = {
  Checkbox?: InputMaybe<CheckboxUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CheckboxParentUpdateWithNestedWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxUpdateWithNestedWhereUniqueInput>;
};

export type CheckboxParentUpsertWithNestedWhereUniqueAndPositionInput = {
  Checkbox?: InputMaybe<CheckboxUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CheckboxParentUpsertWithNestedWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxUpsertWithNestedWhereUniqueInput>;
};

export type CheckboxParentWhereInput = {
  Checkbox?: InputMaybe<CheckboxWhereInput>;
};

export type CheckboxParentWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxWhereUniqueInput>;
};

export type CheckboxUpdateInput = {
  checkbox?: InputMaybe<CheckboxcheckboxUnionUpdateOneInlineInput>;
};

export type CheckboxUpdateManyInlineInput = {
  /** Create and connect multiple Checkbox component instances */
  create?: InputMaybe<Array<CheckboxCreateWithPositionInput>>;
  /** Delete multiple Checkbox documents */
  delete?: InputMaybe<Array<CheckboxWhereUniqueInput>>;
  /** Update multiple Checkbox component instances */
  update?: InputMaybe<Array<CheckboxUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Checkbox component instances */
  upsert?: InputMaybe<Array<CheckboxUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CheckboxUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>;
};

export type CheckboxUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CheckboxUpdateManyInput;
  /** Document search */
  where: CheckboxWhereInput;
};

export type CheckboxUpdateOneInlineInput = {
  /** Create and connect one Checkbox document */
  create?: InputMaybe<CheckboxCreateInput>;
  /** Delete currently connected Checkbox document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Checkbox document */
  update?: InputMaybe<CheckboxUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Checkbox document */
  upsert?: InputMaybe<CheckboxUpsertWithNestedWhereUniqueInput>;
};

export type CheckboxUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<CheckboxUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CheckboxWhereUniqueInput;
};

export type CheckboxUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CheckboxUpdateInput;
  /** Unique document search */
  where: CheckboxWhereUniqueInput;
};

export type CheckboxUpsertInput = {
  /** Create document if it didn't exist */
  create: CheckboxCreateInput;
  /** Update document if it exists */
  update: CheckboxUpdateInput;
};

export type CheckboxUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<CheckboxUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: CheckboxWhereUniqueInput;
};

export type CheckboxUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CheckboxUpsertInput;
  /** Unique document search */
  where: CheckboxWhereUniqueInput;
};

/** Identifies documents */
export type CheckboxWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CheckboxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  /** All values in which the modular component is connected to the given models */
  checkbox?: InputMaybe<CheckboxcheckboxUnionWhereInput>;
  /** All values in which the union is empty. */
  checkbox_empty?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
};

/** References Checkbox record uniquely */
export type CheckboxWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CheckboxcheckboxUnion = Checkbox;

export type CheckboxcheckboxUnionConnectInput = {
  Checkbox?: InputMaybe<CheckboxConnectInput>;
};

export type CheckboxcheckboxUnionCreateInput = {
  Checkbox?: InputMaybe<CheckboxCreateInput>;
};

export type CheckboxcheckboxUnionCreateManyInlineInput = {
  /** Create and connect multiple existing CheckboxcheckboxUnion documents */
  create?: InputMaybe<Array<CheckboxcheckboxUnionCreateInput>>;
};

export type CheckboxcheckboxUnionCreateOneInlineInput = {
  /** Create and connect one CheckboxcheckboxUnion document */
  create?: InputMaybe<CheckboxcheckboxUnionCreateInput>;
};

export type CheckboxcheckboxUnionCreateWithPositionInput = {
  Checkbox?: InputMaybe<CheckboxCreateWithPositionInput>;
};

export type CheckboxcheckboxUnionUpdateInput = {
  Checkbox?: InputMaybe<CheckboxUpdateInput>;
};

export type CheckboxcheckboxUnionUpdateManyInlineInput = {
  /** Create and connect multiple CheckboxcheckboxUnion component instances */
  create?: InputMaybe<Array<CheckboxcheckboxUnionCreateWithPositionInput>>;
  /** Delete multiple CheckboxcheckboxUnion documents */
  delete?: InputMaybe<Array<CheckboxcheckboxUnionWhereUniqueInput>>;
  /** Update multiple CheckboxcheckboxUnion component instances */
  update?: InputMaybe<Array<CheckboxcheckboxUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple CheckboxcheckboxUnion component instances */
  upsert?: InputMaybe<Array<CheckboxcheckboxUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type CheckboxcheckboxUnionUpdateManyWithNestedWhereInput = {
  Checkbox?: InputMaybe<CheckboxUpdateManyWithNestedWhereInput>;
};

export type CheckboxcheckboxUnionUpdateOneInlineInput = {
  /** Create and connect one CheckboxcheckboxUnion document */
  create?: InputMaybe<CheckboxcheckboxUnionCreateInput>;
  /** Delete currently connected CheckboxcheckboxUnion document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single CheckboxcheckboxUnion document */
  update?: InputMaybe<CheckboxcheckboxUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CheckboxcheckboxUnion document */
  upsert?: InputMaybe<CheckboxcheckboxUnionUpsertWithNestedWhereUniqueInput>;
};

export type CheckboxcheckboxUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Checkbox?: InputMaybe<CheckboxUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type CheckboxcheckboxUnionUpdateWithNestedWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxUpdateWithNestedWhereUniqueInput>;
};

export type CheckboxcheckboxUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Checkbox?: InputMaybe<CheckboxUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type CheckboxcheckboxUnionUpsertWithNestedWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxUpsertWithNestedWhereUniqueInput>;
};

export type CheckboxcheckboxUnionWhereInput = {
  Checkbox?: InputMaybe<CheckboxWhereInput>;
};

export type CheckboxcheckboxUnionWhereUniqueInput = {
  Checkbox?: InputMaybe<CheckboxWhereUniqueInput>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String']['output'];
  hex: Scalars['Hex']['output'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime']['output'];
  data?: Maybe<Scalars['Json']['output']>;
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Checkbox = 'Checkbox',
  GetSlider = 'GetSlider',
  MedicalTeam = 'MedicalTeam',
  NewSchedule = 'NewSchedule',
  NewsFeed = 'NewsFeed',
  Patient = 'Patient',
  RequestUserEformPdf = 'RequestUserEformPdf',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  TipsGuide = 'TipsGuide',
  /** User system model */
  User = 'User',
  UzLab = 'UzLab'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Locale>;
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export type GetSlider = Entity & Node & {
  __typename?: 'GetSlider';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<GetSlider>;
  /** List of GetSlider versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image?: Maybe<Asset>;
  name?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type GetSliderCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GetSliderDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type GetSliderHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type GetSliderImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type GetSliderPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type GetSliderScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type GetSliderUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type GetSliderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: GetSliderWhereUniqueInput;
};

/** A connection to a list of items. */
export type GetSliderConnection = {
  __typename?: 'GetSliderConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<GetSliderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type GetSliderCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GetSliderCreateManyInlineInput = {
  /** Connect multiple existing GetSlider documents */
  connect?: InputMaybe<Array<GetSliderWhereUniqueInput>>;
  /** Create and connect multiple existing GetSlider documents */
  create?: InputMaybe<Array<GetSliderCreateInput>>;
};

export type GetSliderCreateOneInlineInput = {
  /** Connect one existing GetSlider document */
  connect?: InputMaybe<GetSliderWhereUniqueInput>;
  /** Create and connect one GetSlider document */
  create?: InputMaybe<GetSliderCreateInput>;
};

/** An edge in a connection. */
export type GetSliderEdge = {
  __typename?: 'GetSliderEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: GetSlider;
};

/** Identifies documents */
export type GetSliderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GetSliderWhereStageInput>;
  documentInStages_none?: InputMaybe<GetSliderWhereStageInput>;
  documentInStages_some?: InputMaybe<GetSliderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum GetSliderOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type GetSliderUpdateInput = {
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetSliderUpdateManyInlineInput = {
  /** Connect multiple existing GetSlider documents */
  connect?: InputMaybe<Array<GetSliderConnectInput>>;
  /** Create and connect multiple GetSlider documents */
  create?: InputMaybe<Array<GetSliderCreateInput>>;
  /** Delete multiple GetSlider documents */
  delete?: InputMaybe<Array<GetSliderWhereUniqueInput>>;
  /** Disconnect multiple GetSlider documents */
  disconnect?: InputMaybe<Array<GetSliderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing GetSlider documents */
  set?: InputMaybe<Array<GetSliderWhereUniqueInput>>;
  /** Update multiple GetSlider documents */
  update?: InputMaybe<Array<GetSliderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple GetSlider documents */
  upsert?: InputMaybe<Array<GetSliderUpsertWithNestedWhereUniqueInput>>;
};

export type GetSliderUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GetSliderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: GetSliderUpdateManyInput;
  /** Document search */
  where: GetSliderWhereInput;
};

export type GetSliderUpdateOneInlineInput = {
  /** Connect existing GetSlider document */
  connect?: InputMaybe<GetSliderWhereUniqueInput>;
  /** Create and connect one GetSlider document */
  create?: InputMaybe<GetSliderCreateInput>;
  /** Delete currently connected GetSlider document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected GetSlider document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single GetSlider document */
  update?: InputMaybe<GetSliderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single GetSlider document */
  upsert?: InputMaybe<GetSliderUpsertWithNestedWhereUniqueInput>;
};

export type GetSliderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: GetSliderUpdateInput;
  /** Unique document search */
  where: GetSliderWhereUniqueInput;
};

export type GetSliderUpsertInput = {
  /** Create document if it didn't exist */
  create: GetSliderCreateInput;
  /** Update document if it exists */
  update: GetSliderUpdateInput;
};

export type GetSliderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: GetSliderUpsertInput;
  /** Unique document search */
  where: GetSliderWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type GetSliderWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type GetSliderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GetSliderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<GetSliderWhereStageInput>;
  documentInStages_none?: InputMaybe<GetSliderWhereStageInput>;
  documentInStages_some?: InputMaybe<GetSliderWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type GetSliderWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<GetSliderWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<GetSliderWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<GetSliderWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<GetSliderWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References GetSlider record uniquely */
export type GetSliderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input'];
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input'];
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input'];
};

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input'];
};

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input'];
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input'];
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input'];
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input'];
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input'];
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input'];
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>;
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>;
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>;
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>;
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>;
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type MedicalTeam = Entity & Node & {
  __typename?: 'MedicalTeam';
  aboutDoctor?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<MedicalTeam>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  /** List of MedicalTeam versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Title>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type MedicalTeamCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MedicalTeamDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type MedicalTeamHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type MedicalTeamProfileImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type MedicalTeamPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type MedicalTeamScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MedicalTeamUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type MedicalTeamConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MedicalTeamWhereUniqueInput;
};

/** A connection to a list of items. */
export type MedicalTeamConnection = {
  __typename?: 'MedicalTeamConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MedicalTeamEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MedicalTeamCreateInput = {
  aboutDoctor?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetCreateOneInlineInput>;
  title?: InputMaybe<Title>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MedicalTeamCreateManyInlineInput = {
  /** Connect multiple existing MedicalTeam documents */
  connect?: InputMaybe<Array<MedicalTeamWhereUniqueInput>>;
  /** Create and connect multiple existing MedicalTeam documents */
  create?: InputMaybe<Array<MedicalTeamCreateInput>>;
};

export type MedicalTeamCreateOneInlineInput = {
  /** Connect one existing MedicalTeam document */
  connect?: InputMaybe<MedicalTeamWhereUniqueInput>;
  /** Create and connect one MedicalTeam document */
  create?: InputMaybe<MedicalTeamCreateInput>;
};

/** An edge in a connection. */
export type MedicalTeamEdge = {
  __typename?: 'MedicalTeamEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MedicalTeam;
};

/** Identifies documents */
export type MedicalTeamManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aboutDoctor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  aboutDoctor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  aboutDoctor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  aboutDoctor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  aboutDoctor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  aboutDoctor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  aboutDoctor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  aboutDoctor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  aboutDoctor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  aboutDoctor_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<MedicalTeamWhereStageInput>;
  documentInStages_none?: InputMaybe<MedicalTeamWhereStageInput>;
  documentInStages_some?: InputMaybe<MedicalTeamWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Title>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Title>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Title>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Title>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum MedicalTeamOrderByInput {
  AboutDoctorAsc = 'aboutDoctor_ASC',
  AboutDoctorDesc = 'aboutDoctor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PhoneNumberAsc = 'phoneNumber_ASC',
  PhoneNumberDesc = 'phoneNumber_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MedicalTeamUpdateInput = {
  aboutDoctor?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetUpdateOneInlineInput>;
  title?: InputMaybe<Title>;
};

export type MedicalTeamUpdateManyInlineInput = {
  /** Connect multiple existing MedicalTeam documents */
  connect?: InputMaybe<Array<MedicalTeamConnectInput>>;
  /** Create and connect multiple MedicalTeam documents */
  create?: InputMaybe<Array<MedicalTeamCreateInput>>;
  /** Delete multiple MedicalTeam documents */
  delete?: InputMaybe<Array<MedicalTeamWhereUniqueInput>>;
  /** Disconnect multiple MedicalTeam documents */
  disconnect?: InputMaybe<Array<MedicalTeamWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing MedicalTeam documents */
  set?: InputMaybe<Array<MedicalTeamWhereUniqueInput>>;
  /** Update multiple MedicalTeam documents */
  update?: InputMaybe<Array<MedicalTeamUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple MedicalTeam documents */
  upsert?: InputMaybe<Array<MedicalTeamUpsertWithNestedWhereUniqueInput>>;
};

export type MedicalTeamUpdateManyInput = {
  aboutDoctor?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Title>;
};

export type MedicalTeamUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MedicalTeamUpdateManyInput;
  /** Document search */
  where: MedicalTeamWhereInput;
};

export type MedicalTeamUpdateOneInlineInput = {
  /** Connect existing MedicalTeam document */
  connect?: InputMaybe<MedicalTeamWhereUniqueInput>;
  /** Create and connect one MedicalTeam document */
  create?: InputMaybe<MedicalTeamCreateInput>;
  /** Delete currently connected MedicalTeam document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected MedicalTeam document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single MedicalTeam document */
  update?: InputMaybe<MedicalTeamUpdateWithNestedWhereUniqueInput>;
  /** Upsert single MedicalTeam document */
  upsert?: InputMaybe<MedicalTeamUpsertWithNestedWhereUniqueInput>;
};

export type MedicalTeamUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MedicalTeamUpdateInput;
  /** Unique document search */
  where: MedicalTeamWhereUniqueInput;
};

export type MedicalTeamUpsertInput = {
  /** Create document if it didn't exist */
  create: MedicalTeamCreateInput;
  /** Update document if it exists */
  update: MedicalTeamUpdateInput;
};

export type MedicalTeamUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MedicalTeamUpsertInput;
  /** Unique document search */
  where: MedicalTeamWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type MedicalTeamWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type MedicalTeamWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MedicalTeamWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  aboutDoctor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  aboutDoctor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  aboutDoctor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  aboutDoctor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  aboutDoctor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  aboutDoctor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  aboutDoctor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  aboutDoctor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  aboutDoctor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  aboutDoctor_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<MedicalTeamWhereStageInput>;
  documentInStages_none?: InputMaybe<MedicalTeamWhereStageInput>;
  documentInStages_some?: InputMaybe<MedicalTeamWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phoneNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phoneNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phoneNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phoneNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phoneNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phoneNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phoneNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phoneNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phoneNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Title>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Title>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Title>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Title>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type MedicalTeamWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MedicalTeamWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MedicalTeamWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MedicalTeamWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<MedicalTeamWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References MedicalTeam record uniquely */
export type MedicalTeamWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>;
  /** Create one getSlider */
  createGetSlider?: Maybe<GetSlider>;
  /** Create one medicalTeam */
  createMedicalTeam?: Maybe<MedicalTeam>;
  /** Create one newSchedule */
  createNewSchedule?: Maybe<NewSchedule>;
  /** Create one newsFeed */
  createNewsFeed?: Maybe<NewsFeed>;
  /** Create one patient */
  createPatient?: Maybe<Patient>;
  /** Create one requestUserEformPdf */
  createRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one tipsGuide */
  createTipsGuide?: Maybe<TipsGuide>;
  /** Create one uzLab */
  createUzLab?: Maybe<UzLab>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one getSlider from _all_ existing stages. Returns deleted document. */
  deleteGetSlider?: Maybe<GetSlider>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many GetSlider documents
   * @deprecated Please use the new paginated many mutation (deleteManyGetSlidersConnection)
   */
  deleteManyGetSliders: BatchPayload;
  /** Delete many GetSlider documents, return deleted documents */
  deleteManyGetSlidersConnection: GetSliderConnection;
  /**
   * Delete many MedicalTeam documents
   * @deprecated Please use the new paginated many mutation (deleteManyMedicalTeamsConnection)
   */
  deleteManyMedicalTeams: BatchPayload;
  /** Delete many MedicalTeam documents, return deleted documents */
  deleteManyMedicalTeamsConnection: MedicalTeamConnection;
  /**
   * Delete many NewSchedule documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewSchedulesConnection)
   */
  deleteManyNewSchedules: BatchPayload;
  /** Delete many NewSchedule documents, return deleted documents */
  deleteManyNewSchedulesConnection: NewScheduleConnection;
  /**
   * Delete many NewsFeed documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewsFeedsConnection)
   */
  deleteManyNewsFeeds: BatchPayload;
  /** Delete many NewsFeed documents, return deleted documents */
  deleteManyNewsFeedsConnection: NewsFeedConnection;
  /**
   * Delete many Patient documents
   * @deprecated Please use the new paginated many mutation (deleteManyPatientsConnection)
   */
  deleteManyPatients: BatchPayload;
  /** Delete many Patient documents, return deleted documents */
  deleteManyPatientsConnection: PatientConnection;
  /**
   * Delete many RequestUserEformPdf documents
   * @deprecated Please use the new paginated many mutation (deleteManyRequestUserEformPdfsConnection)
   */
  deleteManyRequestUserEformPdfs: BatchPayload;
  /** Delete many RequestUserEformPdf documents, return deleted documents */
  deleteManyRequestUserEformPdfsConnection: RequestUserEformPdfConnection;
  /**
   * Delete many TipsGuide documents
   * @deprecated Please use the new paginated many mutation (deleteManyTipsGuidesConnection)
   */
  deleteManyTipsGuides: BatchPayload;
  /** Delete many TipsGuide documents, return deleted documents */
  deleteManyTipsGuidesConnection: TipsGuideConnection;
  /**
   * Delete many UzLab documents
   * @deprecated Please use the new paginated many mutation (deleteManyUzLabsConnection)
   */
  deleteManyUzLabs: BatchPayload;
  /** Delete many UzLab documents, return deleted documents */
  deleteManyUzLabsConnection: UzLabConnection;
  /** Delete one medicalTeam from _all_ existing stages. Returns deleted document. */
  deleteMedicalTeam?: Maybe<MedicalTeam>;
  /** Delete one newSchedule from _all_ existing stages. Returns deleted document. */
  deleteNewSchedule?: Maybe<NewSchedule>;
  /** Delete one newsFeed from _all_ existing stages. Returns deleted document. */
  deleteNewsFeed?: Maybe<NewsFeed>;
  /** Delete one patient from _all_ existing stages. Returns deleted document. */
  deletePatient?: Maybe<Patient>;
  /** Delete one requestUserEformPdf from _all_ existing stages. Returns deleted document. */
  deleteRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one tipsGuide from _all_ existing stages. Returns deleted document. */
  deleteTipsGuide?: Maybe<TipsGuide>;
  /** Delete one uzLab from _all_ existing stages. Returns deleted document. */
  deleteUzLab?: Maybe<UzLab>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one getSlider */
  publishGetSlider?: Maybe<GetSlider>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many GetSlider documents
   * @deprecated Please use the new paginated many mutation (publishManyGetSlidersConnection)
   */
  publishManyGetSliders: BatchPayload;
  /** Publish many GetSlider documents */
  publishManyGetSlidersConnection: GetSliderConnection;
  /**
   * Publish many MedicalTeam documents
   * @deprecated Please use the new paginated many mutation (publishManyMedicalTeamsConnection)
   */
  publishManyMedicalTeams: BatchPayload;
  /** Publish many MedicalTeam documents */
  publishManyMedicalTeamsConnection: MedicalTeamConnection;
  /**
   * Publish many NewSchedule documents
   * @deprecated Please use the new paginated many mutation (publishManyNewSchedulesConnection)
   */
  publishManyNewSchedules: BatchPayload;
  /** Publish many NewSchedule documents */
  publishManyNewSchedulesConnection: NewScheduleConnection;
  /**
   * Publish many NewsFeed documents
   * @deprecated Please use the new paginated many mutation (publishManyNewsFeedsConnection)
   */
  publishManyNewsFeeds: BatchPayload;
  /** Publish many NewsFeed documents */
  publishManyNewsFeedsConnection: NewsFeedConnection;
  /**
   * Publish many Patient documents
   * @deprecated Please use the new paginated many mutation (publishManyPatientsConnection)
   */
  publishManyPatients: BatchPayload;
  /** Publish many Patient documents */
  publishManyPatientsConnection: PatientConnection;
  /**
   * Publish many RequestUserEformPdf documents
   * @deprecated Please use the new paginated many mutation (publishManyRequestUserEformPdfsConnection)
   */
  publishManyRequestUserEformPdfs: BatchPayload;
  /** Publish many RequestUserEformPdf documents */
  publishManyRequestUserEformPdfsConnection: RequestUserEformPdfConnection;
  /**
   * Publish many TipsGuide documents
   * @deprecated Please use the new paginated many mutation (publishManyTipsGuidesConnection)
   */
  publishManyTipsGuides: BatchPayload;
  /** Publish many TipsGuide documents */
  publishManyTipsGuidesConnection: TipsGuideConnection;
  /**
   * Publish many UzLab documents
   * @deprecated Please use the new paginated many mutation (publishManyUzLabsConnection)
   */
  publishManyUzLabs: BatchPayload;
  /** Publish many UzLab documents */
  publishManyUzLabsConnection: UzLabConnection;
  /** Publish one medicalTeam */
  publishMedicalTeam?: Maybe<MedicalTeam>;
  /** Publish one newSchedule */
  publishNewSchedule?: Maybe<NewSchedule>;
  /** Publish one newsFeed */
  publishNewsFeed?: Maybe<NewsFeed>;
  /** Publish one patient */
  publishPatient?: Maybe<Patient>;
  /** Publish one requestUserEformPdf */
  publishRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Publish one tipsGuide */
  publishTipsGuide?: Maybe<TipsGuide>;
  /** Publish one uzLab */
  publishUzLab?: Maybe<UzLab>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one getSlider */
  schedulePublishGetSlider?: Maybe<GetSlider>;
  /** Schedule to publish one medicalTeam */
  schedulePublishMedicalTeam?: Maybe<MedicalTeam>;
  /** Schedule to publish one newSchedule */
  schedulePublishNewSchedule?: Maybe<NewSchedule>;
  /** Schedule to publish one newsFeed */
  schedulePublishNewsFeed?: Maybe<NewsFeed>;
  /** Schedule to publish one patient */
  schedulePublishPatient?: Maybe<Patient>;
  /** Schedule to publish one requestUserEformPdf */
  schedulePublishRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Schedule to publish one tipsGuide */
  schedulePublishTipsGuide?: Maybe<TipsGuide>;
  /** Schedule to publish one uzLab */
  schedulePublishUzLab?: Maybe<UzLab>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one getSlider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishGetSlider?: Maybe<GetSlider>;
  /** Unpublish one medicalTeam from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMedicalTeam?: Maybe<MedicalTeam>;
  /** Unpublish one newSchedule from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewSchedule?: Maybe<NewSchedule>;
  /** Unpublish one newsFeed from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewsFeed?: Maybe<NewsFeed>;
  /** Unpublish one patient from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPatient?: Maybe<Patient>;
  /** Unpublish one requestUserEformPdf from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Unpublish one tipsGuide from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTipsGuide?: Maybe<TipsGuide>;
  /** Unpublish one uzLab from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishUzLab?: Maybe<UzLab>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one getSlider from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishGetSlider?: Maybe<GetSlider>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many GetSlider documents
   * @deprecated Please use the new paginated many mutation (unpublishManyGetSlidersConnection)
   */
  unpublishManyGetSliders: BatchPayload;
  /** Find many GetSlider documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyGetSlidersConnection: GetSliderConnection;
  /**
   * Unpublish many MedicalTeam documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMedicalTeamsConnection)
   */
  unpublishManyMedicalTeams: BatchPayload;
  /** Find many MedicalTeam documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMedicalTeamsConnection: MedicalTeamConnection;
  /**
   * Unpublish many NewSchedule documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewSchedulesConnection)
   */
  unpublishManyNewSchedules: BatchPayload;
  /** Find many NewSchedule documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewSchedulesConnection: NewScheduleConnection;
  /**
   * Unpublish many NewsFeed documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewsFeedsConnection)
   */
  unpublishManyNewsFeeds: BatchPayload;
  /** Find many NewsFeed documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewsFeedsConnection: NewsFeedConnection;
  /**
   * Unpublish many Patient documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPatientsConnection)
   */
  unpublishManyPatients: BatchPayload;
  /** Find many Patient documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPatientsConnection: PatientConnection;
  /**
   * Unpublish many RequestUserEformPdf documents
   * @deprecated Please use the new paginated many mutation (unpublishManyRequestUserEformPdfsConnection)
   */
  unpublishManyRequestUserEformPdfs: BatchPayload;
  /** Find many RequestUserEformPdf documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyRequestUserEformPdfsConnection: RequestUserEformPdfConnection;
  /**
   * Unpublish many TipsGuide documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTipsGuidesConnection)
   */
  unpublishManyTipsGuides: BatchPayload;
  /** Find many TipsGuide documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTipsGuidesConnection: TipsGuideConnection;
  /**
   * Unpublish many UzLab documents
   * @deprecated Please use the new paginated many mutation (unpublishManyUzLabsConnection)
   */
  unpublishManyUzLabs: BatchPayload;
  /** Find many UzLab documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyUzLabsConnection: UzLabConnection;
  /** Unpublish one medicalTeam from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMedicalTeam?: Maybe<MedicalTeam>;
  /** Unpublish one newSchedule from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewSchedule?: Maybe<NewSchedule>;
  /** Unpublish one newsFeed from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewsFeed?: Maybe<NewsFeed>;
  /** Unpublish one patient from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPatient?: Maybe<Patient>;
  /** Unpublish one requestUserEformPdf from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Unpublish one tipsGuide from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTipsGuide?: Maybe<TipsGuide>;
  /** Unpublish one uzLab from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishUzLab?: Maybe<UzLab>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one getSlider */
  updateGetSlider?: Maybe<GetSlider>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many getSliders
   * @deprecated Please use the new paginated many mutation (updateManyGetSlidersConnection)
   */
  updateManyGetSliders: BatchPayload;
  /** Update many GetSlider documents */
  updateManyGetSlidersConnection: GetSliderConnection;
  /**
   * Update many medicalTeams
   * @deprecated Please use the new paginated many mutation (updateManyMedicalTeamsConnection)
   */
  updateManyMedicalTeams: BatchPayload;
  /** Update many MedicalTeam documents */
  updateManyMedicalTeamsConnection: MedicalTeamConnection;
  /**
   * Update many newSchedules
   * @deprecated Please use the new paginated many mutation (updateManyNewSchedulesConnection)
   */
  updateManyNewSchedules: BatchPayload;
  /** Update many NewSchedule documents */
  updateManyNewSchedulesConnection: NewScheduleConnection;
  /**
   * Update many newsFeeds
   * @deprecated Please use the new paginated many mutation (updateManyNewsFeedsConnection)
   */
  updateManyNewsFeeds: BatchPayload;
  /** Update many NewsFeed documents */
  updateManyNewsFeedsConnection: NewsFeedConnection;
  /**
   * Update many patients
   * @deprecated Please use the new paginated many mutation (updateManyPatientsConnection)
   */
  updateManyPatients: BatchPayload;
  /** Update many Patient documents */
  updateManyPatientsConnection: PatientConnection;
  /**
   * Update many requestUserEformPdfs
   * @deprecated Please use the new paginated many mutation (updateManyRequestUserEformPdfsConnection)
   */
  updateManyRequestUserEformPdfs: BatchPayload;
  /** Update many RequestUserEformPdf documents */
  updateManyRequestUserEformPdfsConnection: RequestUserEformPdfConnection;
  /**
   * Update many tipsGuides
   * @deprecated Please use the new paginated many mutation (updateManyTipsGuidesConnection)
   */
  updateManyTipsGuides: BatchPayload;
  /** Update many TipsGuide documents */
  updateManyTipsGuidesConnection: TipsGuideConnection;
  /**
   * Update many uzLabs
   * @deprecated Please use the new paginated many mutation (updateManyUzLabsConnection)
   */
  updateManyUzLabs: BatchPayload;
  /** Update many UzLab documents */
  updateManyUzLabsConnection: UzLabConnection;
  /** Update one medicalTeam */
  updateMedicalTeam?: Maybe<MedicalTeam>;
  /** Update one newSchedule */
  updateNewSchedule?: Maybe<NewSchedule>;
  /** Update one newsFeed */
  updateNewsFeed?: Maybe<NewsFeed>;
  /** Update one patient */
  updatePatient?: Maybe<Patient>;
  /** Update one requestUserEformPdf */
  updateRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one tipsGuide */
  updateTipsGuide?: Maybe<TipsGuide>;
  /** Update one uzLab */
  updateUzLab?: Maybe<UzLab>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one getSlider */
  upsertGetSlider?: Maybe<GetSlider>;
  /** Upsert one medicalTeam */
  upsertMedicalTeam?: Maybe<MedicalTeam>;
  /** Upsert one newSchedule */
  upsertNewSchedule?: Maybe<NewSchedule>;
  /** Upsert one newsFeed */
  upsertNewsFeed?: Maybe<NewsFeed>;
  /** Upsert one patient */
  upsertPatient?: Maybe<Patient>;
  /** Upsert one requestUserEformPdf */
  upsertRequestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Upsert one tipsGuide */
  upsertTipsGuide?: Maybe<TipsGuide>;
  /** Upsert one uzLab */
  upsertUzLab?: Maybe<UzLab>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateGetSliderArgs = {
  data: GetSliderCreateInput;
};


export type MutationCreateMedicalTeamArgs = {
  data: MedicalTeamCreateInput;
};


export type MutationCreateNewScheduleArgs = {
  data: NewScheduleCreateInput;
};


export type MutationCreateNewsFeedArgs = {
  data: NewsFeedCreateInput;
};


export type MutationCreatePatientArgs = {
  data: PatientCreateInput;
};


export type MutationCreateRequestUserEformPdfArgs = {
  data: RequestUserEformPdfCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateTipsGuideArgs = {
  data: TipsGuideCreateInput;
};


export type MutationCreateUzLabArgs = {
  data: UzLabCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteGetSliderArgs = {
  where: GetSliderWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyGetSlidersArgs = {
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationDeleteManyGetSlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationDeleteManyMedicalTeamsArgs = {
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationDeleteManyMedicalTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationDeleteManyNewSchedulesArgs = {
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationDeleteManyNewSchedulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationDeleteManyNewsFeedsArgs = {
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationDeleteManyNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationDeleteManyPatientsArgs = {
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationDeleteManyPatientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationDeleteManyRequestUserEformPdfsArgs = {
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationDeleteManyRequestUserEformPdfsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationDeleteManyTipsGuidesArgs = {
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationDeleteManyTipsGuidesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationDeleteManyUzLabsArgs = {
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationDeleteManyUzLabsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationDeleteMedicalTeamArgs = {
  where: MedicalTeamWhereUniqueInput;
};


export type MutationDeleteNewScheduleArgs = {
  where: NewScheduleWhereUniqueInput;
};


export type MutationDeleteNewsFeedArgs = {
  where: NewsFeedWhereUniqueInput;
};


export type MutationDeletePatientArgs = {
  where: PatientWhereUniqueInput;
};


export type MutationDeleteRequestUserEformPdfArgs = {
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteTipsGuideArgs = {
  where: TipsGuideWhereUniqueInput;
};


export type MutationDeleteUzLabArgs = {
  where: UzLabWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishGetSliderArgs = {
  to?: Array<Stage>;
  where: GetSliderWhereUniqueInput;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationPublishManyGetSlidersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationPublishManyGetSlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationPublishManyMedicalTeamsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationPublishManyMedicalTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationPublishManyNewSchedulesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationPublishManyNewSchedulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationPublishManyNewsFeedsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationPublishManyNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationPublishManyPatientsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationPublishManyPatientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationPublishManyRequestUserEformPdfsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationPublishManyRequestUserEformPdfsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationPublishManyTipsGuidesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationPublishManyTipsGuidesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationPublishManyUzLabsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationPublishManyUzLabsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  to?: Array<Stage>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationPublishMedicalTeamArgs = {
  to?: Array<Stage>;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationPublishNewScheduleArgs = {
  to?: Array<Stage>;
  where: NewScheduleWhereUniqueInput;
};


export type MutationPublishNewsFeedArgs = {
  to?: Array<Stage>;
  where: NewsFeedWhereUniqueInput;
};


export type MutationPublishPatientArgs = {
  to?: Array<Stage>;
  where: PatientWhereUniqueInput;
};


export type MutationPublishRequestUserEformPdfArgs = {
  to?: Array<Stage>;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationPublishTipsGuideArgs = {
  to?: Array<Stage>;
  where: TipsGuideWhereUniqueInput;
};


export type MutationPublishUzLabArgs = {
  to?: Array<Stage>;
  where: UzLabWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSchedulePublishGetSliderArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: GetSliderWhereUniqueInput;
};


export type MutationSchedulePublishMedicalTeamArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationSchedulePublishNewScheduleArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NewScheduleWhereUniqueInput;
};


export type MutationSchedulePublishNewsFeedArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: NewsFeedWhereUniqueInput;
};


export type MutationSchedulePublishPatientArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: PatientWhereUniqueInput;
};


export type MutationSchedulePublishRequestUserEformPdfArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationSchedulePublishTipsGuideArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: TipsGuideWhereUniqueInput;
};


export type MutationSchedulePublishUzLabArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  to?: Array<Stage>;
  where: UzLabWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishGetSliderArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: GetSliderWhereUniqueInput;
};


export type MutationScheduleUnpublishMedicalTeamArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationScheduleUnpublishNewScheduleArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NewScheduleWhereUniqueInput;
};


export type MutationScheduleUnpublishNewsFeedArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: NewsFeedWhereUniqueInput;
};


export type MutationScheduleUnpublishPatientArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: PatientWhereUniqueInput;
};


export type MutationScheduleUnpublishRequestUserEformPdfArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationScheduleUnpublishTipsGuideArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: TipsGuideWhereUniqueInput;
};


export type MutationScheduleUnpublishUzLabArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  releaseId?: InputMaybe<Scalars['String']['input']>;
  where: UzLabWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishGetSliderArgs = {
  from?: Array<Stage>;
  where: GetSliderWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyGetSlidersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationUnpublishManyGetSlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationUnpublishManyMedicalTeamsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationUnpublishManyMedicalTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationUnpublishManyNewSchedulesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationUnpublishManyNewSchedulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationUnpublishManyNewsFeedsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationUnpublishManyNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationUnpublishManyPatientsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationUnpublishManyPatientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationUnpublishManyRequestUserEformPdfsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationUnpublishManyRequestUserEformPdfsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationUnpublishManyTipsGuidesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationUnpublishManyTipsGuidesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationUnpublishManyUzLabsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationUnpublishManyUzLabsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationUnpublishMedicalTeamArgs = {
  from?: Array<Stage>;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationUnpublishNewScheduleArgs = {
  from?: Array<Stage>;
  where: NewScheduleWhereUniqueInput;
};


export type MutationUnpublishNewsFeedArgs = {
  from?: Array<Stage>;
  where: NewsFeedWhereUniqueInput;
};


export type MutationUnpublishPatientArgs = {
  from?: Array<Stage>;
  where: PatientWhereUniqueInput;
};


export type MutationUnpublishRequestUserEformPdfArgs = {
  from?: Array<Stage>;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationUnpublishTipsGuideArgs = {
  from?: Array<Stage>;
  where: TipsGuideWhereUniqueInput;
};


export type MutationUnpublishUzLabArgs = {
  from?: Array<Stage>;
  where: UzLabWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateGetSliderArgs = {
  data: GetSliderUpdateInput;
  where: GetSliderWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyGetSlidersArgs = {
  data: GetSliderUpdateManyInput;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationUpdateManyGetSlidersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: GetSliderUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GetSliderManyWhereInput>;
};


export type MutationUpdateManyMedicalTeamsArgs = {
  data: MedicalTeamUpdateManyInput;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationUpdateManyMedicalTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: MedicalTeamUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MedicalTeamManyWhereInput>;
};


export type MutationUpdateManyNewSchedulesArgs = {
  data: NewScheduleUpdateManyInput;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationUpdateManyNewSchedulesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NewScheduleUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewScheduleManyWhereInput>;
};


export type MutationUpdateManyNewsFeedsArgs = {
  data: NewsFeedUpdateManyInput;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationUpdateManyNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: NewsFeedUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewsFeedManyWhereInput>;
};


export type MutationUpdateManyPatientsArgs = {
  data: PatientUpdateManyInput;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationUpdateManyPatientsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: PatientUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PatientManyWhereInput>;
};


export type MutationUpdateManyRequestUserEformPdfsArgs = {
  data: RequestUserEformPdfUpdateManyInput;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationUpdateManyRequestUserEformPdfsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: RequestUserEformPdfUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RequestUserEformPdfManyWhereInput>;
};


export type MutationUpdateManyTipsGuidesArgs = {
  data: TipsGuideUpdateManyInput;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationUpdateManyTipsGuidesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: TipsGuideUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TipsGuideManyWhereInput>;
};


export type MutationUpdateManyUzLabsArgs = {
  data: UzLabUpdateManyInput;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationUpdateManyUzLabsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>;
  before?: InputMaybe<Scalars['ID']['input']>;
  data: UzLabUpdateManyInput;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UzLabManyWhereInput>;
};


export type MutationUpdateMedicalTeamArgs = {
  data: MedicalTeamUpdateInput;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationUpdateNewScheduleArgs = {
  data: NewScheduleUpdateInput;
  where: NewScheduleWhereUniqueInput;
};


export type MutationUpdateNewsFeedArgs = {
  data: NewsFeedUpdateInput;
  where: NewsFeedWhereUniqueInput;
};


export type MutationUpdatePatientArgs = {
  data: PatientUpdateInput;
  where: PatientWhereUniqueInput;
};


export type MutationUpdateRequestUserEformPdfArgs = {
  data: RequestUserEformPdfUpdateInput;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateTipsGuideArgs = {
  data: TipsGuideUpdateInput;
  where: TipsGuideWhereUniqueInput;
};


export type MutationUpdateUzLabArgs = {
  data: UzLabUpdateInput;
  where: UzLabWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertGetSliderArgs = {
  upsert: GetSliderUpsertInput;
  where: GetSliderWhereUniqueInput;
};


export type MutationUpsertMedicalTeamArgs = {
  upsert: MedicalTeamUpsertInput;
  where: MedicalTeamWhereUniqueInput;
};


export type MutationUpsertNewScheduleArgs = {
  upsert: NewScheduleUpsertInput;
  where: NewScheduleWhereUniqueInput;
};


export type MutationUpsertNewsFeedArgs = {
  upsert: NewsFeedUpsertInput;
  where: NewsFeedWhereUniqueInput;
};


export type MutationUpsertPatientArgs = {
  upsert: PatientUpsertInput;
  where: PatientWhereUniqueInput;
};


export type MutationUpsertRequestUserEformPdfArgs = {
  upsert: RequestUserEformPdfUpsertInput;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type MutationUpsertTipsGuideArgs = {
  upsert: TipsGuideUpsertInput;
  where: TipsGuideWhereUniqueInput;
};


export type MutationUpsertUzLabArgs = {
  upsert: UzLabUpsertInput;
  where: UzLabWhereUniqueInput;
};

export type NewSchedule = Entity & Node & {
  __typename?: 'NewSchedule';
  charting?: Maybe<Asset>;
  clinician?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NewSchedule>;
  email?: Maybe<Scalars['String']['output']>;
  /** List of NewSchedule versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  patients: Array<Patient>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  room?: Maybe<Scalars['String']['output']>;
  scheduleDate?: Maybe<Scalars['String']['output']>;
  scheduleStatus?: Maybe<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  time?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NewScheduleChartingArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type NewScheduleCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewScheduleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NewScheduleHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NewSchedulePatientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PatientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PatientWhereInput>;
};


export type NewSchedulePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewScheduleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NewScheduleUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewScheduleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewScheduleWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewScheduleConnection = {
  __typename?: 'NewScheduleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewScheduleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewScheduleCreateInput = {
  charting?: InputMaybe<AssetCreateOneInlineInput>;
  clinician?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  patients?: InputMaybe<PatientCreateManyInlineInput>;
  room?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
  scheduleStatus?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewScheduleCreateManyInlineInput = {
  /** Connect multiple existing NewSchedule documents */
  connect?: InputMaybe<Array<NewScheduleWhereUniqueInput>>;
  /** Create and connect multiple existing NewSchedule documents */
  create?: InputMaybe<Array<NewScheduleCreateInput>>;
};

export type NewScheduleCreateOneInlineInput = {
  /** Connect one existing NewSchedule document */
  connect?: InputMaybe<NewScheduleWhereUniqueInput>;
  /** Create and connect one NewSchedule document */
  create?: InputMaybe<NewScheduleCreateInput>;
};

/** An edge in a connection. */
export type NewScheduleEdge = {
  __typename?: 'NewScheduleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NewSchedule;
};

/** Identifies documents */
export type NewScheduleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  charting?: InputMaybe<AssetWhereInput>;
  clinician?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  clinician_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  clinician_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  clinician_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  clinician_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  clinician_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  clinician_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  clinician_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  clinician_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  clinician_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewScheduleWhereStageInput>;
  documentInStages_none?: InputMaybe<NewScheduleWhereStageInput>;
  documentInStages_some?: InputMaybe<NewScheduleWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  patients_every?: InputMaybe<PatientWhereInput>;
  patients_none?: InputMaybe<PatientWhereInput>;
  patients_some?: InputMaybe<PatientWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  room?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  room_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  room_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  room_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  room_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  room_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  room_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  room_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  room_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  room_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  scheduleDate_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  scheduleDate_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  scheduleDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  scheduleDate_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  scheduleDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  scheduleDate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  scheduleDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  scheduleDate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  scheduleDate_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduleStatus?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  scheduleStatus_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  scheduleStatus_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  scheduleStatus_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  scheduleStatus_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  scheduleStatus_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  scheduleStatus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  scheduleStatus_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  scheduleStatus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  scheduleStatus_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  time?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  time_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  time_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  time_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  time_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  time_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  time_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewScheduleOrderByInput {
  ClinicianAsc = 'clinician_ASC',
  ClinicianDesc = 'clinician_DESC',
  ContactNumberAsc = 'contactNumber_ASC',
  ContactNumberDesc = 'contactNumber_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RoomAsc = 'room_ASC',
  RoomDesc = 'room_DESC',
  ScheduleDateAsc = 'scheduleDate_ASC',
  ScheduleDateDesc = 'scheduleDate_DESC',
  ScheduleStatusAsc = 'scheduleStatus_ASC',
  ScheduleStatusDesc = 'scheduleStatus_DESC',
  TimeAsc = 'time_ASC',
  TimeDesc = 'time_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewScheduleUpdateInput = {
  charting?: InputMaybe<AssetUpdateOneInlineInput>;
  clinician?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  patients?: InputMaybe<PatientUpdateManyInlineInput>;
  room?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
  scheduleStatus?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type NewScheduleUpdateManyInlineInput = {
  /** Connect multiple existing NewSchedule documents */
  connect?: InputMaybe<Array<NewScheduleConnectInput>>;
  /** Create and connect multiple NewSchedule documents */
  create?: InputMaybe<Array<NewScheduleCreateInput>>;
  /** Delete multiple NewSchedule documents */
  delete?: InputMaybe<Array<NewScheduleWhereUniqueInput>>;
  /** Disconnect multiple NewSchedule documents */
  disconnect?: InputMaybe<Array<NewScheduleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewSchedule documents */
  set?: InputMaybe<Array<NewScheduleWhereUniqueInput>>;
  /** Update multiple NewSchedule documents */
  update?: InputMaybe<Array<NewScheduleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewSchedule documents */
  upsert?: InputMaybe<Array<NewScheduleUpsertWithNestedWhereUniqueInput>>;
};

export type NewScheduleUpdateManyInput = {
  clinician?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  room?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
  scheduleStatus?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['String']['input']>;
};

export type NewScheduleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewScheduleUpdateManyInput;
  /** Document search */
  where: NewScheduleWhereInput;
};

export type NewScheduleUpdateOneInlineInput = {
  /** Connect existing NewSchedule document */
  connect?: InputMaybe<NewScheduleWhereUniqueInput>;
  /** Create and connect one NewSchedule document */
  create?: InputMaybe<NewScheduleCreateInput>;
  /** Delete currently connected NewSchedule document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NewSchedule document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NewSchedule document */
  update?: InputMaybe<NewScheduleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewSchedule document */
  upsert?: InputMaybe<NewScheduleUpsertWithNestedWhereUniqueInput>;
};

export type NewScheduleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewScheduleUpdateInput;
  /** Unique document search */
  where: NewScheduleWhereUniqueInput;
};

export type NewScheduleUpsertInput = {
  /** Create document if it didn't exist */
  create: NewScheduleCreateInput;
  /** Update document if it exists */
  update: NewScheduleUpdateInput;
};

export type NewScheduleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewScheduleUpsertInput;
  /** Unique document search */
  where: NewScheduleWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewScheduleWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NewScheduleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewScheduleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  charting?: InputMaybe<AssetWhereInput>;
  clinician?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  clinician_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  clinician_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  clinician_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  clinician_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  clinician_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  clinician_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  clinician_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  clinician_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  clinician_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewScheduleWhereStageInput>;
  documentInStages_none?: InputMaybe<NewScheduleWhereStageInput>;
  documentInStages_some?: InputMaybe<NewScheduleWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  patients_every?: InputMaybe<PatientWhereInput>;
  patients_none?: InputMaybe<PatientWhereInput>;
  patients_some?: InputMaybe<PatientWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  room?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  room_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  room_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  room_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  room_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  room_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  room_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  room_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  room_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  room_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  scheduleDate_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  scheduleDate_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  scheduleDate_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  scheduleDate_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  scheduleDate_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  scheduleDate_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  scheduleDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  scheduleDate_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  scheduleDate_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduleStatus?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  scheduleStatus_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  scheduleStatus_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  scheduleStatus_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  scheduleStatus_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  scheduleStatus_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  scheduleStatus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  scheduleStatus_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  scheduleStatus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  scheduleStatus_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  time?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  time_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  time_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  time_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  time_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  time_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  time_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  time_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  time_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  time_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewScheduleWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewScheduleWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewScheduleWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewScheduleWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewScheduleWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewSchedule record uniquely */
export type NewScheduleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type NewsFeed = Entity & Node & {
  __typename?: 'NewsFeed';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<NewsFeed>;
  /** List of NewsFeed versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NewsFeedCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsFeedDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type NewsFeedHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type NewsFeedImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type NewsFeedPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsFeedScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NewsFeedUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsFeedConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewsFeedWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewsFeedConnection = {
  __typename?: 'NewsFeedConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewsFeedEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewsFeedCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NewsFeedCreateManyInlineInput = {
  /** Connect multiple existing NewsFeed documents */
  connect?: InputMaybe<Array<NewsFeedWhereUniqueInput>>;
  /** Create and connect multiple existing NewsFeed documents */
  create?: InputMaybe<Array<NewsFeedCreateInput>>;
};

export type NewsFeedCreateOneInlineInput = {
  /** Connect one existing NewsFeed document */
  connect?: InputMaybe<NewsFeedWhereUniqueInput>;
  /** Create and connect one NewsFeed document */
  create?: InputMaybe<NewsFeedCreateInput>;
};

/** An edge in a connection. */
export type NewsFeedEdge = {
  __typename?: 'NewsFeedEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NewsFeed;
};

/** Identifies documents */
export type NewsFeedManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<NewsFeedWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsFeedWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsFeedWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewsFeedOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewsFeedUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsFeedUpdateManyInlineInput = {
  /** Connect multiple existing NewsFeed documents */
  connect?: InputMaybe<Array<NewsFeedConnectInput>>;
  /** Create and connect multiple NewsFeed documents */
  create?: InputMaybe<Array<NewsFeedCreateInput>>;
  /** Delete multiple NewsFeed documents */
  delete?: InputMaybe<Array<NewsFeedWhereUniqueInput>>;
  /** Disconnect multiple NewsFeed documents */
  disconnect?: InputMaybe<Array<NewsFeedWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewsFeed documents */
  set?: InputMaybe<Array<NewsFeedWhereUniqueInput>>;
  /** Update multiple NewsFeed documents */
  update?: InputMaybe<Array<NewsFeedUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewsFeed documents */
  upsert?: InputMaybe<Array<NewsFeedUpsertWithNestedWhereUniqueInput>>;
};

export type NewsFeedUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type NewsFeedUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewsFeedUpdateManyInput;
  /** Document search */
  where: NewsFeedWhereInput;
};

export type NewsFeedUpdateOneInlineInput = {
  /** Connect existing NewsFeed document */
  connect?: InputMaybe<NewsFeedWhereUniqueInput>;
  /** Create and connect one NewsFeed document */
  create?: InputMaybe<NewsFeedCreateInput>;
  /** Delete currently connected NewsFeed document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected NewsFeed document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single NewsFeed document */
  update?: InputMaybe<NewsFeedUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewsFeed document */
  upsert?: InputMaybe<NewsFeedUpsertWithNestedWhereUniqueInput>;
};

export type NewsFeedUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewsFeedUpdateInput;
  /** Unique document search */
  where: NewsFeedWhereUniqueInput;
};

export type NewsFeedUpsertInput = {
  /** Create document if it didn't exist */
  create: NewsFeedCreateInput;
  /** Update document if it exists */
  update: NewsFeedUpdateInput;
};

export type NewsFeedUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewsFeedUpsertInput;
  /** Unique document search */
  where: NewsFeedWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewsFeedWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type NewsFeedWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsFeedWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<NewsFeedWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsFeedWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsFeedWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewsFeedWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsFeedWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsFeedWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsFeedWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewsFeedWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewsFeed record uniquely */
export type NewsFeedWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Patient = Entity & Node & {
  __typename?: 'Patient';
  active?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  aidsHivInfection?: Maybe<Scalars['String']['output']>;
  alcoholIntake?: Maybe<Scalars['String']['output']>;
  allergies?: Maybe<Scalars['String']['output']>;
  amoutAndFrequency?: Maybe<Scalars['String']['output']>;
  anemia?: Maybe<Scalars['String']['output']>;
  anyChangesInYourHealth?: Maybe<Scalars['String']['output']>;
  areYouInGoodHealth?: Maybe<Scalars['String']['output']>;
  asthma?: Maybe<Scalars['String']['output']>;
  beenExposed?: Maybe<Scalars['String']['output']>;
  bleedingGums?: Maybe<Scalars['String']['output']>;
  brainInjury?: Maybe<Scalars['String']['output']>;
  bruxing?: Maybe<Scalars['String']['output']>;
  cancerOrTumor?: Maybe<Scalars['String']['output']>;
  careOfAPhysicians?: Maybe<Scalars['String']['output']>;
  chestPains?: Maybe<Scalars['String']['output']>;
  clicking?: Maybe<Scalars['String']['output']>;
  congenitalDisease?: Maybe<Scalars['String']['output']>;
  congenitalDiseaseSpecify?: Maybe<Scalars['String']['output']>;
  contactNumber?: Maybe<Scalars['String']['output']>;
  coughWithBlood?: Maybe<Scalars['String']['output']>;
  coughduration?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dateOfBirth?: Maybe<Scalars['String']['output']>;
  dateOfLastExam?: Maybe<Scalars['String']['output']>;
  dateOfLastPhysicalExam?: Maybe<Scalars['String']['output']>;
  dentures?: Maybe<Scalars['String']['output']>;
  diabetes?: Maybe<Scalars['String']['output']>;
  difficultInBreathing?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<Patient>;
  dryMouth?: Maybe<Scalars['String']['output']>;
  earaches?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emergencyContactName?: Maybe<Scalars['String']['output']>;
  epilepsyConvulsions?: Maybe<Scalars['String']['output']>;
  extraEmergencyContactName?: Maybe<Scalars['String']['output']>;
  extraRelationship?: Maybe<Scalars['String']['output']>;
  foodTrap?: Maybe<Scalars['String']['output']>;
  forWomen?: Maybe<Scalars['String']['output']>;
  frequentSoreThroat?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  heartAttack?: Maybe<Scalars['String']['output']>;
  heartDisease?: Maybe<Scalars['String']['output']>;
  heartDiseaseSpecify?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['String']['output']>;
  hepatitis?: Maybe<Scalars['String']['output']>;
  highBloodPressure?: Maybe<Scalars['String']['output']>;
  /** List of Patient versions */
  history: Array<Version>;
  hospitalization?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  ifYesWhatWasTheIllnessOrProblem?: Maybe<Scalars['String']['output']>;
  jointDisorder?: Maybe<Scalars['String']['output']>;
  jointReplacementOrImplants?: Maybe<Scalars['String']['output']>;
  kidneyDisease?: Maybe<Scalars['String']['output']>;
  kidneyDiseaseSpecify?: Maybe<Scalars['String']['output']>;
  lactating?: Maybe<Scalars['String']['output']>;
  leukemia?: Maybe<Scalars['String']['output']>;
  livErDisorderSpecify?: Maybe<Scalars['String']['output']>;
  liverDisorder?: Maybe<Scalars['String']['output']>;
  lowBloodPressure?: Maybe<Scalars['String']['output']>;
  lungDisease?: Maybe<Scalars['String']['output']>;
  lungDiseaseSpecify?: Maybe<Scalars['String']['output']>;
  neurologicalDisorder?: Maybe<Scalars['String']['output']>;
  neurologicalDisorderSpecify?: Maybe<Scalars['String']['output']>;
  newSchedules: Array<NewSchedule>;
  occupation?: Maybe<Scalars['String']['output']>;
  others?: Maybe<Scalars['String']['output']>;
  othersSpecify?: Maybe<Scalars['String']['output']>;
  pastGap?: Maybe<Scalars['String']['output']>;
  pastOrthodonic?: Maybe<Scalars['String']['output']>;
  persistentCough?: Maybe<Scalars['String']['output']>;
  phonePhysician?: Maybe<Scalars['String']['output']>;
  physiciansName?: Maybe<Scalars['String']['output']>;
  prescriptionOrCounterMedications?: Maybe<Scalars['String']['output']>;
  problem?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Asset>;
  psychiatricTreatment?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  radiationOrChemotherapy?: Maybe<Scalars['String']['output']>;
  recentWEightLoss?: Maybe<Scalars['String']['output']>;
  relationship?: Maybe<Scalars['String']['output']>;
  relationshipNumber?: Maybe<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  secondRelationshipNumber?: Maybe<Scalars['String']['output']>;
  sensitive?: Maybe<Scalars['String']['output']>;
  serious?: Maybe<Scalars['String']['output']>;
  sex?: Maybe<Scalars['String']['output']>;
  sores?: Maybe<Scalars['String']['output']>;
  specify?: Maybe<Scalars['String']['output']>;
  /** System stage field */
  stage: Stage;
  statusAppointment?: Maybe<Scalars['String']['output']>;
  steroidTherapy?: Maybe<Scalars['String']['output']>;
  stomachTroublesUlcers?: Maybe<Scalars['String']['output']>;
  stroke?: Maybe<Scalars['String']['output']>;
  tuberculosis?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  vitaminsNaturalOrHerbalSupplements?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
};


export type PatientCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PatientDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type PatientHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type PatientNewSchedulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NewScheduleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<NewScheduleWhereInput>;
};


export type PatientProfileImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type PatientPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PatientScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PatientUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PatientConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PatientWhereUniqueInput;
};

/** A connection to a list of items. */
export type PatientConnection = {
  __typename?: 'PatientConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PatientEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PatientCreateInput = {
  active?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  aidsHivInfection?: InputMaybe<Scalars['String']['input']>;
  alcoholIntake?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  amoutAndFrequency?: InputMaybe<Scalars['String']['input']>;
  anemia?: InputMaybe<Scalars['String']['input']>;
  anyChangesInYourHealth?: InputMaybe<Scalars['String']['input']>;
  areYouInGoodHealth?: InputMaybe<Scalars['String']['input']>;
  asthma?: InputMaybe<Scalars['String']['input']>;
  beenExposed?: InputMaybe<Scalars['String']['input']>;
  bleedingGums?: InputMaybe<Scalars['String']['input']>;
  brainInjury?: InputMaybe<Scalars['String']['input']>;
  bruxing?: InputMaybe<Scalars['String']['input']>;
  cancerOrTumor?: InputMaybe<Scalars['String']['input']>;
  careOfAPhysicians?: InputMaybe<Scalars['String']['input']>;
  chestPains?: InputMaybe<Scalars['String']['input']>;
  clicking?: InputMaybe<Scalars['String']['input']>;
  congenitalDisease?: InputMaybe<Scalars['String']['input']>;
  congenitalDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  coughWithBlood?: InputMaybe<Scalars['String']['input']>;
  coughduration?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  dateOfLastExam?: InputMaybe<Scalars['String']['input']>;
  dateOfLastPhysicalExam?: InputMaybe<Scalars['String']['input']>;
  dentures?: InputMaybe<Scalars['String']['input']>;
  diabetes?: InputMaybe<Scalars['String']['input']>;
  difficultInBreathing?: InputMaybe<Scalars['String']['input']>;
  dryMouth?: InputMaybe<Scalars['String']['input']>;
  earaches?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  epilepsyConvulsions?: InputMaybe<Scalars['String']['input']>;
  extraEmergencyContactName?: InputMaybe<Scalars['String']['input']>;
  extraRelationship?: InputMaybe<Scalars['String']['input']>;
  foodTrap?: InputMaybe<Scalars['String']['input']>;
  forWomen?: InputMaybe<Scalars['String']['input']>;
  frequentSoreThroat?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  heartAttack?: InputMaybe<Scalars['String']['input']>;
  heartDisease?: InputMaybe<Scalars['String']['input']>;
  heartDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  hepatitis?: InputMaybe<Scalars['String']['input']>;
  highBloodPressure?: InputMaybe<Scalars['String']['input']>;
  hospitalization?: InputMaybe<Scalars['String']['input']>;
  ifYesWhatWasTheIllnessOrProblem?: InputMaybe<Scalars['String']['input']>;
  jointDisorder?: InputMaybe<Scalars['String']['input']>;
  jointReplacementOrImplants?: InputMaybe<Scalars['String']['input']>;
  kidneyDisease?: InputMaybe<Scalars['String']['input']>;
  kidneyDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  lactating?: InputMaybe<Scalars['String']['input']>;
  leukemia?: InputMaybe<Scalars['String']['input']>;
  livErDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  liverDisorder?: InputMaybe<Scalars['String']['input']>;
  lowBloodPressure?: InputMaybe<Scalars['String']['input']>;
  lungDisease?: InputMaybe<Scalars['String']['input']>;
  lungDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorder?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  newSchedules?: InputMaybe<NewScheduleCreateManyInlineInput>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  othersSpecify?: InputMaybe<Scalars['String']['input']>;
  pastGap?: InputMaybe<Scalars['String']['input']>;
  pastOrthodonic?: InputMaybe<Scalars['String']['input']>;
  persistentCough?: InputMaybe<Scalars['String']['input']>;
  phonePhysician?: InputMaybe<Scalars['String']['input']>;
  physiciansName?: InputMaybe<Scalars['String']['input']>;
  prescriptionOrCounterMedications?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetCreateOneInlineInput>;
  psychiatricTreatment?: InputMaybe<Scalars['String']['input']>;
  radiationOrChemotherapy?: InputMaybe<Scalars['String']['input']>;
  recentWEightLoss?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
  relationshipNumber?: InputMaybe<Scalars['String']['input']>;
  secondRelationshipNumber?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['String']['input']>;
  serious?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sores?: InputMaybe<Scalars['String']['input']>;
  specify?: InputMaybe<Scalars['String']['input']>;
  statusAppointment?: InputMaybe<Scalars['String']['input']>;
  steroidTherapy?: InputMaybe<Scalars['String']['input']>;
  stomachTroublesUlcers?: InputMaybe<Scalars['String']['input']>;
  stroke?: InputMaybe<Scalars['String']['input']>;
  tuberculosis?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  vitaminsNaturalOrHerbalSupplements?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type PatientCreateManyInlineInput = {
  /** Connect multiple existing Patient documents */
  connect?: InputMaybe<Array<PatientWhereUniqueInput>>;
  /** Create and connect multiple existing Patient documents */
  create?: InputMaybe<Array<PatientCreateInput>>;
};

export type PatientCreateOneInlineInput = {
  /** Connect one existing Patient document */
  connect?: InputMaybe<PatientWhereUniqueInput>;
  /** Create and connect one Patient document */
  create?: InputMaybe<PatientCreateInput>;
};

/** An edge in a connection. */
export type PatientEdge = {
  __typename?: 'PatientEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Patient;
};

/** Identifies documents */
export type PatientManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PatientWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PatientWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PatientWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  active_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  active_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  active_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  active_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  active_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  active_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  active_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  active_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  active_starts_with?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  aidsHivInfection?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  aidsHivInfection_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  aidsHivInfection_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  aidsHivInfection_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  aidsHivInfection_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  aidsHivInfection_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  aidsHivInfection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  aidsHivInfection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  aidsHivInfection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  aidsHivInfection_starts_with?: InputMaybe<Scalars['String']['input']>;
  alcoholIntake?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alcoholIntake_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alcoholIntake_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alcoholIntake_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alcoholIntake_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alcoholIntake_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alcoholIntake_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alcoholIntake_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alcoholIntake_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alcoholIntake_starts_with?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  allergies_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  allergies_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  allergies_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  allergies_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  allergies_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  allergies_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  allergies_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  allergies_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  allergies_starts_with?: InputMaybe<Scalars['String']['input']>;
  amoutAndFrequency?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  amoutAndFrequency_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  amoutAndFrequency_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  amoutAndFrequency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  amoutAndFrequency_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  amoutAndFrequency_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  amoutAndFrequency_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  amoutAndFrequency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  amoutAndFrequency_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  amoutAndFrequency_starts_with?: InputMaybe<Scalars['String']['input']>;
  anemia?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  anemia_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  anemia_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  anemia_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  anemia_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  anemia_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  anemia_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  anemia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  anemia_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  anemia_starts_with?: InputMaybe<Scalars['String']['input']>;
  anyChangesInYourHealth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  anyChangesInYourHealth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  anyChangesInYourHealth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  anyChangesInYourHealth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  anyChangesInYourHealth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  anyChangesInYourHealth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  anyChangesInYourHealth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  anyChangesInYourHealth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  anyChangesInYourHealth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  anyChangesInYourHealth_starts_with?: InputMaybe<Scalars['String']['input']>;
  areYouInGoodHealth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  areYouInGoodHealth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  areYouInGoodHealth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  areYouInGoodHealth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  areYouInGoodHealth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  areYouInGoodHealth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  areYouInGoodHealth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  areYouInGoodHealth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  areYouInGoodHealth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  areYouInGoodHealth_starts_with?: InputMaybe<Scalars['String']['input']>;
  asthma?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  asthma_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  asthma_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  asthma_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  asthma_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  asthma_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  asthma_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  asthma_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  asthma_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  asthma_starts_with?: InputMaybe<Scalars['String']['input']>;
  beenExposed?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beenExposed_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beenExposed_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beenExposed_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beenExposed_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beenExposed_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beenExposed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beenExposed_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beenExposed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beenExposed_starts_with?: InputMaybe<Scalars['String']['input']>;
  bleedingGums?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bleedingGums_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bleedingGums_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bleedingGums_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bleedingGums_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bleedingGums_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bleedingGums_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bleedingGums_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bleedingGums_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bleedingGums_starts_with?: InputMaybe<Scalars['String']['input']>;
  brainInjury?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brainInjury_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brainInjury_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brainInjury_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brainInjury_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brainInjury_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brainInjury_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brainInjury_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brainInjury_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brainInjury_starts_with?: InputMaybe<Scalars['String']['input']>;
  bruxing?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bruxing_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bruxing_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bruxing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bruxing_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bruxing_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bruxing_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bruxing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bruxing_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bruxing_starts_with?: InputMaybe<Scalars['String']['input']>;
  cancerOrTumor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cancerOrTumor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cancerOrTumor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cancerOrTumor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cancerOrTumor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cancerOrTumor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cancerOrTumor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cancerOrTumor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cancerOrTumor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cancerOrTumor_starts_with?: InputMaybe<Scalars['String']['input']>;
  careOfAPhysicians?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  careOfAPhysicians_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  careOfAPhysicians_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  careOfAPhysicians_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  careOfAPhysicians_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  careOfAPhysicians_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  careOfAPhysicians_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  careOfAPhysicians_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  careOfAPhysicians_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  careOfAPhysicians_starts_with?: InputMaybe<Scalars['String']['input']>;
  chestPains?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chestPains_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chestPains_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chestPains_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chestPains_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chestPains_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chestPains_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chestPains_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chestPains_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chestPains_starts_with?: InputMaybe<Scalars['String']['input']>;
  clicking?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  clicking_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  clicking_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  clicking_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  clicking_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  clicking_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  clicking_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  clicking_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  clicking_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  clicking_starts_with?: InputMaybe<Scalars['String']['input']>;
  congenitalDisease?: InputMaybe<Scalars['String']['input']>;
  congenitalDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  congenitalDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  congenitalDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  congenitalDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  congenitalDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  congenitalDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  congenitalDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  congenitalDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  congenitalDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  congenitalDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  congenitalDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  congenitalDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  congenitalDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  congenitalDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  congenitalDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  congenitalDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  congenitalDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  congenitalDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  congenitalDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  coughWithBlood?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  coughWithBlood_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  coughWithBlood_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  coughWithBlood_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coughWithBlood_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  coughWithBlood_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  coughWithBlood_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  coughWithBlood_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  coughWithBlood_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  coughWithBlood_starts_with?: InputMaybe<Scalars['String']['input']>;
  coughduration?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  coughduration_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  coughduration_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  coughduration_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coughduration_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  coughduration_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  coughduration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  coughduration_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  coughduration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  coughduration_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfBirth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfBirth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfBirth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfBirth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfBirth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfBirth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfBirth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfBirth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfBirth_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfLastExam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfLastExam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfLastExam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfLastExam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfLastExam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfLastExam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfLastExam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfLastExam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfLastExam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfLastExam_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfLastPhysicalExam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfLastPhysicalExam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfLastPhysicalExam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfLastPhysicalExam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfLastPhysicalExam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfLastPhysicalExam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfLastPhysicalExam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfLastPhysicalExam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfLastPhysicalExam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfLastPhysicalExam_starts_with?: InputMaybe<Scalars['String']['input']>;
  dentures?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dentures_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dentures_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dentures_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dentures_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dentures_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dentures_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dentures_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dentures_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dentures_starts_with?: InputMaybe<Scalars['String']['input']>;
  diabetes?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  diabetes_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  diabetes_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  diabetes_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  diabetes_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  diabetes_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  diabetes_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  diabetes_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  diabetes_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  diabetes_starts_with?: InputMaybe<Scalars['String']['input']>;
  difficultInBreathing?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  difficultInBreathing_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  difficultInBreathing_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  difficultInBreathing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  difficultInBreathing_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  difficultInBreathing_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  difficultInBreathing_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  difficultInBreathing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  difficultInBreathing_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  difficultInBreathing_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PatientWhereStageInput>;
  documentInStages_none?: InputMaybe<PatientWhereStageInput>;
  documentInStages_some?: InputMaybe<PatientWhereStageInput>;
  dryMouth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dryMouth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dryMouth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dryMouth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dryMouth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dryMouth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dryMouth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dryMouth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dryMouth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dryMouth_starts_with?: InputMaybe<Scalars['String']['input']>;
  earaches?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  earaches_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  earaches_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  earaches_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  earaches_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  earaches_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  earaches_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  earaches_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  earaches_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  earaches_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emergencyContactName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emergencyContactName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emergencyContactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emergencyContactName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emergencyContactName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emergencyContactName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emergencyContactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emergencyContactName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emergencyContactName_starts_with?: InputMaybe<Scalars['String']['input']>;
  epilepsyConvulsions?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  epilepsyConvulsions_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  epilepsyConvulsions_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  epilepsyConvulsions_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  epilepsyConvulsions_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  epilepsyConvulsions_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  epilepsyConvulsions_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  epilepsyConvulsions_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  epilepsyConvulsions_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  epilepsyConvulsions_starts_with?: InputMaybe<Scalars['String']['input']>;
  extraEmergencyContactName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  extraEmergencyContactName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  extraEmergencyContactName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  extraEmergencyContactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  extraEmergencyContactName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  extraEmergencyContactName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  extraEmergencyContactName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  extraEmergencyContactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  extraEmergencyContactName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  extraEmergencyContactName_starts_with?: InputMaybe<Scalars['String']['input']>;
  extraRelationship?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  extraRelationship_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  extraRelationship_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  extraRelationship_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  extraRelationship_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  extraRelationship_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  extraRelationship_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  extraRelationship_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  extraRelationship_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  extraRelationship_starts_with?: InputMaybe<Scalars['String']['input']>;
  foodTrap?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  foodTrap_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  foodTrap_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  foodTrap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  foodTrap_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  foodTrap_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  foodTrap_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  foodTrap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  foodTrap_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  foodTrap_starts_with?: InputMaybe<Scalars['String']['input']>;
  forWomen?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  forWomen_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  forWomen_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  forWomen_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  forWomen_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  forWomen_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  forWomen_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  forWomen_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  forWomen_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  forWomen_starts_with?: InputMaybe<Scalars['String']['input']>;
  frequentSoreThroat?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  frequentSoreThroat_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  frequentSoreThroat_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  frequentSoreThroat_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  frequentSoreThroat_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  frequentSoreThroat_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  frequentSoreThroat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  frequentSoreThroat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  frequentSoreThroat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  frequentSoreThroat_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  heartAttack?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartAttack_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartAttack_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartAttack_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartAttack_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartAttack_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartAttack_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartAttack_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartAttack_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartAttack_starts_with?: InputMaybe<Scalars['String']['input']>;
  heartDisease?: InputMaybe<Scalars['String']['input']>;
  heartDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  height_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  height_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  height_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  height_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  height_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  height_starts_with?: InputMaybe<Scalars['String']['input']>;
  hepatitis?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  hepatitis_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  hepatitis_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  hepatitis_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hepatitis_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  hepatitis_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  hepatitis_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  hepatitis_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  hepatitis_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  hepatitis_starts_with?: InputMaybe<Scalars['String']['input']>;
  highBloodPressure?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  highBloodPressure_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  highBloodPressure_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  highBloodPressure_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  highBloodPressure_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  highBloodPressure_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  highBloodPressure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  highBloodPressure_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  highBloodPressure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  highBloodPressure_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalization?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  hospitalization_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  hospitalization_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  hospitalization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hospitalization_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  hospitalization_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  hospitalization_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  hospitalization_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  hospitalization_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  hospitalization_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ifYesWhatWasTheIllnessOrProblem?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ifYesWhatWasTheIllnessOrProblem_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ifYesWhatWasTheIllnessOrProblem_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ifYesWhatWasTheIllnessOrProblem_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ifYesWhatWasTheIllnessOrProblem_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ifYesWhatWasTheIllnessOrProblem_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ifYesWhatWasTheIllnessOrProblem_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ifYesWhatWasTheIllnessOrProblem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ifYesWhatWasTheIllnessOrProblem_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ifYesWhatWasTheIllnessOrProblem_starts_with?: InputMaybe<Scalars['String']['input']>;
  jointDisorder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jointDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jointDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jointDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jointDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jointDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jointDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jointDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jointDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jointDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  jointReplacementOrImplants?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jointReplacementOrImplants_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jointReplacementOrImplants_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jointReplacementOrImplants_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jointReplacementOrImplants_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jointReplacementOrImplants_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jointReplacementOrImplants_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jointReplacementOrImplants_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jointReplacementOrImplants_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jointReplacementOrImplants_starts_with?: InputMaybe<Scalars['String']['input']>;
  kidneyDisease?: InputMaybe<Scalars['String']['input']>;
  kidneyDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  kidneyDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  kidneyDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  kidneyDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  kidneyDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  kidneyDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  kidneyDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  kidneyDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  kidneyDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  kidneyDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  kidneyDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  kidneyDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  kidneyDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  kidneyDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  kidneyDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  kidneyDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  kidneyDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  kidneyDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  kidneyDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  lactating?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lactating_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lactating_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lactating_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lactating_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lactating_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lactating_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lactating_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lactating_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lactating_starts_with?: InputMaybe<Scalars['String']['input']>;
  leukemia?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  leukemia_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  leukemia_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  leukemia_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  leukemia_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  leukemia_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  leukemia_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  leukemia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  leukemia_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  leukemia_starts_with?: InputMaybe<Scalars['String']['input']>;
  livErDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  livErDisorderSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  livErDisorderSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  livErDisorderSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  livErDisorderSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  livErDisorderSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  livErDisorderSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  livErDisorderSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  livErDisorderSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  livErDisorderSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  liverDisorder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  liverDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  liverDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  liverDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  liverDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  liverDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  liverDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  liverDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  liverDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  liverDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  lowBloodPressure?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lowBloodPressure_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lowBloodPressure_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lowBloodPressure_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lowBloodPressure_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lowBloodPressure_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lowBloodPressure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lowBloodPressure_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lowBloodPressure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lowBloodPressure_starts_with?: InputMaybe<Scalars['String']['input']>;
  lungDisease?: InputMaybe<Scalars['String']['input']>;
  lungDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lungDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lungDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lungDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lungDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lungDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lungDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lungDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lungDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lungDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lungDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lungDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lungDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lungDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lungDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lungDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lungDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lungDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lungDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorder?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  neurologicalDisorderSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  neurologicalDisorderSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  neurologicalDisorderSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neurologicalDisorderSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  neurologicalDisorderSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  neurologicalDisorderSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  neurologicalDisorderSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  neurologicalDisorderSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  neurologicalDisorderSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  neurologicalDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  neurologicalDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  neurologicalDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neurologicalDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  neurologicalDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  neurologicalDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  neurologicalDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  neurologicalDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  neurologicalDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  newSchedules_every?: InputMaybe<NewScheduleWhereInput>;
  newSchedules_none?: InputMaybe<NewScheduleWhereInput>;
  newSchedules_some?: InputMaybe<NewScheduleWhereInput>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  othersSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  othersSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  othersSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  othersSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  othersSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  othersSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  othersSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  othersSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  othersSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  othersSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  others_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  others_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  others_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  others_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  others_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  others_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  others_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  others_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  others_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastGap?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pastGap_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pastGap_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pastGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pastGap_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pastGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pastGap_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pastGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pastGap_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pastGap_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastOrthodonic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pastOrthodonic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pastOrthodonic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pastOrthodonic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pastOrthodonic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pastOrthodonic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pastOrthodonic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pastOrthodonic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pastOrthodonic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pastOrthodonic_starts_with?: InputMaybe<Scalars['String']['input']>;
  persistentCough?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  persistentCough_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  persistentCough_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  persistentCough_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  persistentCough_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  persistentCough_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  persistentCough_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  persistentCough_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  persistentCough_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  persistentCough_starts_with?: InputMaybe<Scalars['String']['input']>;
  phonePhysician?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phonePhysician_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phonePhysician_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phonePhysician_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phonePhysician_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phonePhysician_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phonePhysician_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phonePhysician_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phonePhysician_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phonePhysician_starts_with?: InputMaybe<Scalars['String']['input']>;
  physiciansName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  physiciansName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  physiciansName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  physiciansName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  physiciansName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  physiciansName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  physiciansName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  physiciansName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  physiciansName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  physiciansName_starts_with?: InputMaybe<Scalars['String']['input']>;
  prescriptionOrCounterMedications?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  prescriptionOrCounterMedications_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  prescriptionOrCounterMedications_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  prescriptionOrCounterMedications_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  prescriptionOrCounterMedications_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  prescriptionOrCounterMedications_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  prescriptionOrCounterMedications_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  prescriptionOrCounterMedications_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  prescriptionOrCounterMedications_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  prescriptionOrCounterMedications_starts_with?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  problem_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  problem_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  problem_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  problem_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  problem_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  problem_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  problem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  problem_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  problem_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetWhereInput>;
  psychiatricTreatment?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  psychiatricTreatment_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  psychiatricTreatment_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  psychiatricTreatment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  psychiatricTreatment_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  psychiatricTreatment_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  psychiatricTreatment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  psychiatricTreatment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  psychiatricTreatment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  psychiatricTreatment_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  radiationOrChemotherapy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  radiationOrChemotherapy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  radiationOrChemotherapy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  radiationOrChemotherapy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  radiationOrChemotherapy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  radiationOrChemotherapy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  radiationOrChemotherapy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  radiationOrChemotherapy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  radiationOrChemotherapy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  radiationOrChemotherapy_starts_with?: InputMaybe<Scalars['String']['input']>;
  recentWEightLoss?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  recentWEightLoss_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  recentWEightLoss_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  recentWEightLoss_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  recentWEightLoss_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  recentWEightLoss_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  recentWEightLoss_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  recentWEightLoss_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  recentWEightLoss_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  recentWEightLoss_starts_with?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
  relationshipNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relationshipNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relationshipNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relationshipNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relationshipNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relationshipNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relationshipNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relationshipNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relationshipNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relationshipNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relationship_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relationship_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relationship_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relationship_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relationship_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relationship_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relationship_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relationship_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relationship_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondRelationshipNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  secondRelationshipNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  secondRelationshipNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  secondRelationshipNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondRelationshipNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  secondRelationshipNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  secondRelationshipNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  secondRelationshipNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  secondRelationshipNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  secondRelationshipNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sensitive_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sensitive_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sensitive_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sensitive_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sensitive_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sensitive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sensitive_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sensitive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sensitive_starts_with?: InputMaybe<Scalars['String']['input']>;
  serious?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  serious_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  serious_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  serious_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  serious_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  serious_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  serious_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  serious_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  serious_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  serious_starts_with?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sex_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sex_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sex_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sex_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sex_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sex_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sex_starts_with?: InputMaybe<Scalars['String']['input']>;
  sores?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sores_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sores_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sores_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sores_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sores_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sores_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sores_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sores_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sores_starts_with?: InputMaybe<Scalars['String']['input']>;
  specify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  specify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  specify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  specify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  specify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  specify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  specify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  specify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  specify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  specify_starts_with?: InputMaybe<Scalars['String']['input']>;
  statusAppointment?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  statusAppointment_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  statusAppointment_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  statusAppointment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  statusAppointment_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  statusAppointment_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  statusAppointment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  statusAppointment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  statusAppointment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  statusAppointment_starts_with?: InputMaybe<Scalars['String']['input']>;
  steroidTherapy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  steroidTherapy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  steroidTherapy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  steroidTherapy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  steroidTherapy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  steroidTherapy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  steroidTherapy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  steroidTherapy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  steroidTherapy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  steroidTherapy_starts_with?: InputMaybe<Scalars['String']['input']>;
  stomachTroublesUlcers?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  stomachTroublesUlcers_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  stomachTroublesUlcers_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  stomachTroublesUlcers_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stomachTroublesUlcers_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  stomachTroublesUlcers_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  stomachTroublesUlcers_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  stomachTroublesUlcers_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  stomachTroublesUlcers_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  stomachTroublesUlcers_starts_with?: InputMaybe<Scalars['String']['input']>;
  stroke?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  stroke_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  stroke_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  stroke_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stroke_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  stroke_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  stroke_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  stroke_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  stroke_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  stroke_starts_with?: InputMaybe<Scalars['String']['input']>;
  tuberculosis?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tuberculosis_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tuberculosis_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tuberculosis_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tuberculosis_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tuberculosis_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tuberculosis_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tuberculosis_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tuberculosis_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tuberculosis_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  vitaminsNaturalOrHerbalSupplements?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  vitaminsNaturalOrHerbalSupplements_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  vitaminsNaturalOrHerbalSupplements_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  vitaminsNaturalOrHerbalSupplements_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vitaminsNaturalOrHerbalSupplements_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  vitaminsNaturalOrHerbalSupplements_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  vitaminsNaturalOrHerbalSupplements_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  vitaminsNaturalOrHerbalSupplements_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  vitaminsNaturalOrHerbalSupplements_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  vitaminsNaturalOrHerbalSupplements_starts_with?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  weight_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  weight_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  weight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  weight_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  weight_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  weight_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  weight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  weight_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  weight_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export enum PatientOrderByInput {
  ActiveAsc = 'active_ASC',
  ActiveDesc = 'active_DESC',
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  AidsHivInfectionAsc = 'aidsHivInfection_ASC',
  AidsHivInfectionDesc = 'aidsHivInfection_DESC',
  AlcoholIntakeAsc = 'alcoholIntake_ASC',
  AlcoholIntakeDesc = 'alcoholIntake_DESC',
  AllergiesAsc = 'allergies_ASC',
  AllergiesDesc = 'allergies_DESC',
  AmoutAndFrequencyAsc = 'amoutAndFrequency_ASC',
  AmoutAndFrequencyDesc = 'amoutAndFrequency_DESC',
  AnemiaAsc = 'anemia_ASC',
  AnemiaDesc = 'anemia_DESC',
  AnyChangesInYourHealthAsc = 'anyChangesInYourHealth_ASC',
  AnyChangesInYourHealthDesc = 'anyChangesInYourHealth_DESC',
  AreYouInGoodHealthAsc = 'areYouInGoodHealth_ASC',
  AreYouInGoodHealthDesc = 'areYouInGoodHealth_DESC',
  AsthmaAsc = 'asthma_ASC',
  AsthmaDesc = 'asthma_DESC',
  BeenExposedAsc = 'beenExposed_ASC',
  BeenExposedDesc = 'beenExposed_DESC',
  BleedingGumsAsc = 'bleedingGums_ASC',
  BleedingGumsDesc = 'bleedingGums_DESC',
  BrainInjuryAsc = 'brainInjury_ASC',
  BrainInjuryDesc = 'brainInjury_DESC',
  BruxingAsc = 'bruxing_ASC',
  BruxingDesc = 'bruxing_DESC',
  CancerOrTumorAsc = 'cancerOrTumor_ASC',
  CancerOrTumorDesc = 'cancerOrTumor_DESC',
  CareOfAPhysiciansAsc = 'careOfAPhysicians_ASC',
  CareOfAPhysiciansDesc = 'careOfAPhysicians_DESC',
  ChestPainsAsc = 'chestPains_ASC',
  ChestPainsDesc = 'chestPains_DESC',
  ClickingAsc = 'clicking_ASC',
  ClickingDesc = 'clicking_DESC',
  CongenitalDiseaseSpecifyAsc = 'congenitalDiseaseSpecify_ASC',
  CongenitalDiseaseSpecifyDesc = 'congenitalDiseaseSpecify_DESC',
  CongenitalDiseaseAsc = 'congenitalDisease_ASC',
  CongenitalDiseaseDesc = 'congenitalDisease_DESC',
  ContactNumberAsc = 'contactNumber_ASC',
  ContactNumberDesc = 'contactNumber_DESC',
  CoughWithBloodAsc = 'coughWithBlood_ASC',
  CoughWithBloodDesc = 'coughWithBlood_DESC',
  CoughdurationAsc = 'coughduration_ASC',
  CoughdurationDesc = 'coughduration_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  DateOfLastExamAsc = 'dateOfLastExam_ASC',
  DateOfLastExamDesc = 'dateOfLastExam_DESC',
  DateOfLastPhysicalExamAsc = 'dateOfLastPhysicalExam_ASC',
  DateOfLastPhysicalExamDesc = 'dateOfLastPhysicalExam_DESC',
  DenturesAsc = 'dentures_ASC',
  DenturesDesc = 'dentures_DESC',
  DiabetesAsc = 'diabetes_ASC',
  DiabetesDesc = 'diabetes_DESC',
  DifficultInBreathingAsc = 'difficultInBreathing_ASC',
  DifficultInBreathingDesc = 'difficultInBreathing_DESC',
  DryMouthAsc = 'dryMouth_ASC',
  DryMouthDesc = 'dryMouth_DESC',
  EarachesAsc = 'earaches_ASC',
  EarachesDesc = 'earaches_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  EmergencyContactNameAsc = 'emergencyContactName_ASC',
  EmergencyContactNameDesc = 'emergencyContactName_DESC',
  EpilepsyConvulsionsAsc = 'epilepsyConvulsions_ASC',
  EpilepsyConvulsionsDesc = 'epilepsyConvulsions_DESC',
  ExtraEmergencyContactNameAsc = 'extraEmergencyContactName_ASC',
  ExtraEmergencyContactNameDesc = 'extraEmergencyContactName_DESC',
  ExtraRelationshipAsc = 'extraRelationship_ASC',
  ExtraRelationshipDesc = 'extraRelationship_DESC',
  FoodTrapAsc = 'foodTrap_ASC',
  FoodTrapDesc = 'foodTrap_DESC',
  ForWomenAsc = 'forWomen_ASC',
  ForWomenDesc = 'forWomen_DESC',
  FrequentSoreThroatAsc = 'frequentSoreThroat_ASC',
  FrequentSoreThroatDesc = 'frequentSoreThroat_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  HeartAttackAsc = 'heartAttack_ASC',
  HeartAttackDesc = 'heartAttack_DESC',
  HeartDiseaseSpecifyAsc = 'heartDiseaseSpecify_ASC',
  HeartDiseaseSpecifyDesc = 'heartDiseaseSpecify_DESC',
  HeartDiseaseAsc = 'heartDisease_ASC',
  HeartDiseaseDesc = 'heartDisease_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  HepatitisAsc = 'hepatitis_ASC',
  HepatitisDesc = 'hepatitis_DESC',
  HighBloodPressureAsc = 'highBloodPressure_ASC',
  HighBloodPressureDesc = 'highBloodPressure_DESC',
  HospitalizationAsc = 'hospitalization_ASC',
  HospitalizationDesc = 'hospitalization_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IfYesWhatWasTheIllnessOrProblemAsc = 'ifYesWhatWasTheIllnessOrProblem_ASC',
  IfYesWhatWasTheIllnessOrProblemDesc = 'ifYesWhatWasTheIllnessOrProblem_DESC',
  JointDisorderAsc = 'jointDisorder_ASC',
  JointDisorderDesc = 'jointDisorder_DESC',
  JointReplacementOrImplantsAsc = 'jointReplacementOrImplants_ASC',
  JointReplacementOrImplantsDesc = 'jointReplacementOrImplants_DESC',
  KidneyDiseaseSpecifyAsc = 'kidneyDiseaseSpecify_ASC',
  KidneyDiseaseSpecifyDesc = 'kidneyDiseaseSpecify_DESC',
  KidneyDiseaseAsc = 'kidneyDisease_ASC',
  KidneyDiseaseDesc = 'kidneyDisease_DESC',
  LactatingAsc = 'lactating_ASC',
  LactatingDesc = 'lactating_DESC',
  LeukemiaAsc = 'leukemia_ASC',
  LeukemiaDesc = 'leukemia_DESC',
  LivErDisorderSpecifyAsc = 'livErDisorderSpecify_ASC',
  LivErDisorderSpecifyDesc = 'livErDisorderSpecify_DESC',
  LiverDisorderAsc = 'liverDisorder_ASC',
  LiverDisorderDesc = 'liverDisorder_DESC',
  LowBloodPressureAsc = 'lowBloodPressure_ASC',
  LowBloodPressureDesc = 'lowBloodPressure_DESC',
  LungDiseaseSpecifyAsc = 'lungDiseaseSpecify_ASC',
  LungDiseaseSpecifyDesc = 'lungDiseaseSpecify_DESC',
  LungDiseaseAsc = 'lungDisease_ASC',
  LungDiseaseDesc = 'lungDisease_DESC',
  NeurologicalDisorderSpecifyAsc = 'neurologicalDisorderSpecify_ASC',
  NeurologicalDisorderSpecifyDesc = 'neurologicalDisorderSpecify_DESC',
  NeurologicalDisorderAsc = 'neurologicalDisorder_ASC',
  NeurologicalDisorderDesc = 'neurologicalDisorder_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  OthersSpecifyAsc = 'othersSpecify_ASC',
  OthersSpecifyDesc = 'othersSpecify_DESC',
  OthersAsc = 'others_ASC',
  OthersDesc = 'others_DESC',
  PastGapAsc = 'pastGap_ASC',
  PastGapDesc = 'pastGap_DESC',
  PastOrthodonicAsc = 'pastOrthodonic_ASC',
  PastOrthodonicDesc = 'pastOrthodonic_DESC',
  PersistentCoughAsc = 'persistentCough_ASC',
  PersistentCoughDesc = 'persistentCough_DESC',
  PhonePhysicianAsc = 'phonePhysician_ASC',
  PhonePhysicianDesc = 'phonePhysician_DESC',
  PhysiciansNameAsc = 'physiciansName_ASC',
  PhysiciansNameDesc = 'physiciansName_DESC',
  PrescriptionOrCounterMedicationsAsc = 'prescriptionOrCounterMedications_ASC',
  PrescriptionOrCounterMedicationsDesc = 'prescriptionOrCounterMedications_DESC',
  ProblemAsc = 'problem_ASC',
  ProblemDesc = 'problem_DESC',
  PsychiatricTreatmentAsc = 'psychiatricTreatment_ASC',
  PsychiatricTreatmentDesc = 'psychiatricTreatment_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RadiationOrChemotherapyAsc = 'radiationOrChemotherapy_ASC',
  RadiationOrChemotherapyDesc = 'radiationOrChemotherapy_DESC',
  RecentWEightLossAsc = 'recentWEightLoss_ASC',
  RecentWEightLossDesc = 'recentWEightLoss_DESC',
  RelationshipNumberAsc = 'relationshipNumber_ASC',
  RelationshipNumberDesc = 'relationshipNumber_DESC',
  RelationshipAsc = 'relationship_ASC',
  RelationshipDesc = 'relationship_DESC',
  SecondRelationshipNumberAsc = 'secondRelationshipNumber_ASC',
  SecondRelationshipNumberDesc = 'secondRelationshipNumber_DESC',
  SensitiveAsc = 'sensitive_ASC',
  SensitiveDesc = 'sensitive_DESC',
  SeriousAsc = 'serious_ASC',
  SeriousDesc = 'serious_DESC',
  SexAsc = 'sex_ASC',
  SexDesc = 'sex_DESC',
  SoresAsc = 'sores_ASC',
  SoresDesc = 'sores_DESC',
  SpecifyAsc = 'specify_ASC',
  SpecifyDesc = 'specify_DESC',
  StatusAppointmentAsc = 'statusAppointment_ASC',
  StatusAppointmentDesc = 'statusAppointment_DESC',
  SteroidTherapyAsc = 'steroidTherapy_ASC',
  SteroidTherapyDesc = 'steroidTherapy_DESC',
  StomachTroublesUlcersAsc = 'stomachTroublesUlcers_ASC',
  StomachTroublesUlcersDesc = 'stomachTroublesUlcers_DESC',
  StrokeAsc = 'stroke_ASC',
  StrokeDesc = 'stroke_DESC',
  TuberculosisAsc = 'tuberculosis_ASC',
  TuberculosisDesc = 'tuberculosis_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VitaminsNaturalOrHerbalSupplementsAsc = 'vitaminsNaturalOrHerbalSupplements_ASC',
  VitaminsNaturalOrHerbalSupplementsDesc = 'vitaminsNaturalOrHerbalSupplements_DESC',
  WeightAsc = 'weight_ASC',
  WeightDesc = 'weight_DESC'
}

export type PatientUpdateInput = {
  active?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  aidsHivInfection?: InputMaybe<Scalars['String']['input']>;
  alcoholIntake?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  amoutAndFrequency?: InputMaybe<Scalars['String']['input']>;
  anemia?: InputMaybe<Scalars['String']['input']>;
  anyChangesInYourHealth?: InputMaybe<Scalars['String']['input']>;
  areYouInGoodHealth?: InputMaybe<Scalars['String']['input']>;
  asthma?: InputMaybe<Scalars['String']['input']>;
  beenExposed?: InputMaybe<Scalars['String']['input']>;
  bleedingGums?: InputMaybe<Scalars['String']['input']>;
  brainInjury?: InputMaybe<Scalars['String']['input']>;
  bruxing?: InputMaybe<Scalars['String']['input']>;
  cancerOrTumor?: InputMaybe<Scalars['String']['input']>;
  careOfAPhysicians?: InputMaybe<Scalars['String']['input']>;
  chestPains?: InputMaybe<Scalars['String']['input']>;
  clicking?: InputMaybe<Scalars['String']['input']>;
  congenitalDisease?: InputMaybe<Scalars['String']['input']>;
  congenitalDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  coughWithBlood?: InputMaybe<Scalars['String']['input']>;
  coughduration?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  dateOfLastExam?: InputMaybe<Scalars['String']['input']>;
  dateOfLastPhysicalExam?: InputMaybe<Scalars['String']['input']>;
  dentures?: InputMaybe<Scalars['String']['input']>;
  diabetes?: InputMaybe<Scalars['String']['input']>;
  difficultInBreathing?: InputMaybe<Scalars['String']['input']>;
  dryMouth?: InputMaybe<Scalars['String']['input']>;
  earaches?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  epilepsyConvulsions?: InputMaybe<Scalars['String']['input']>;
  extraEmergencyContactName?: InputMaybe<Scalars['String']['input']>;
  extraRelationship?: InputMaybe<Scalars['String']['input']>;
  foodTrap?: InputMaybe<Scalars['String']['input']>;
  forWomen?: InputMaybe<Scalars['String']['input']>;
  frequentSoreThroat?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  heartAttack?: InputMaybe<Scalars['String']['input']>;
  heartDisease?: InputMaybe<Scalars['String']['input']>;
  heartDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  hepatitis?: InputMaybe<Scalars['String']['input']>;
  highBloodPressure?: InputMaybe<Scalars['String']['input']>;
  hospitalization?: InputMaybe<Scalars['String']['input']>;
  ifYesWhatWasTheIllnessOrProblem?: InputMaybe<Scalars['String']['input']>;
  jointDisorder?: InputMaybe<Scalars['String']['input']>;
  jointReplacementOrImplants?: InputMaybe<Scalars['String']['input']>;
  kidneyDisease?: InputMaybe<Scalars['String']['input']>;
  kidneyDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  lactating?: InputMaybe<Scalars['String']['input']>;
  leukemia?: InputMaybe<Scalars['String']['input']>;
  livErDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  liverDisorder?: InputMaybe<Scalars['String']['input']>;
  lowBloodPressure?: InputMaybe<Scalars['String']['input']>;
  lungDisease?: InputMaybe<Scalars['String']['input']>;
  lungDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorder?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  newSchedules?: InputMaybe<NewScheduleUpdateManyInlineInput>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  othersSpecify?: InputMaybe<Scalars['String']['input']>;
  pastGap?: InputMaybe<Scalars['String']['input']>;
  pastOrthodonic?: InputMaybe<Scalars['String']['input']>;
  persistentCough?: InputMaybe<Scalars['String']['input']>;
  phonePhysician?: InputMaybe<Scalars['String']['input']>;
  physiciansName?: InputMaybe<Scalars['String']['input']>;
  prescriptionOrCounterMedications?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetUpdateOneInlineInput>;
  psychiatricTreatment?: InputMaybe<Scalars['String']['input']>;
  radiationOrChemotherapy?: InputMaybe<Scalars['String']['input']>;
  recentWEightLoss?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
  relationshipNumber?: InputMaybe<Scalars['String']['input']>;
  secondRelationshipNumber?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['String']['input']>;
  serious?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sores?: InputMaybe<Scalars['String']['input']>;
  specify?: InputMaybe<Scalars['String']['input']>;
  statusAppointment?: InputMaybe<Scalars['String']['input']>;
  steroidTherapy?: InputMaybe<Scalars['String']['input']>;
  stomachTroublesUlcers?: InputMaybe<Scalars['String']['input']>;
  stroke?: InputMaybe<Scalars['String']['input']>;
  tuberculosis?: InputMaybe<Scalars['String']['input']>;
  vitaminsNaturalOrHerbalSupplements?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type PatientUpdateManyInlineInput = {
  /** Connect multiple existing Patient documents */
  connect?: InputMaybe<Array<PatientConnectInput>>;
  /** Create and connect multiple Patient documents */
  create?: InputMaybe<Array<PatientCreateInput>>;
  /** Delete multiple Patient documents */
  delete?: InputMaybe<Array<PatientWhereUniqueInput>>;
  /** Disconnect multiple Patient documents */
  disconnect?: InputMaybe<Array<PatientWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Patient documents */
  set?: InputMaybe<Array<PatientWhereUniqueInput>>;
  /** Update multiple Patient documents */
  update?: InputMaybe<Array<PatientUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Patient documents */
  upsert?: InputMaybe<Array<PatientUpsertWithNestedWhereUniqueInput>>;
};

export type PatientUpdateManyInput = {
  active?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  aidsHivInfection?: InputMaybe<Scalars['String']['input']>;
  alcoholIntake?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  amoutAndFrequency?: InputMaybe<Scalars['String']['input']>;
  anemia?: InputMaybe<Scalars['String']['input']>;
  anyChangesInYourHealth?: InputMaybe<Scalars['String']['input']>;
  areYouInGoodHealth?: InputMaybe<Scalars['String']['input']>;
  asthma?: InputMaybe<Scalars['String']['input']>;
  beenExposed?: InputMaybe<Scalars['String']['input']>;
  bleedingGums?: InputMaybe<Scalars['String']['input']>;
  brainInjury?: InputMaybe<Scalars['String']['input']>;
  bruxing?: InputMaybe<Scalars['String']['input']>;
  cancerOrTumor?: InputMaybe<Scalars['String']['input']>;
  careOfAPhysicians?: InputMaybe<Scalars['String']['input']>;
  chestPains?: InputMaybe<Scalars['String']['input']>;
  clicking?: InputMaybe<Scalars['String']['input']>;
  congenitalDisease?: InputMaybe<Scalars['String']['input']>;
  congenitalDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  coughWithBlood?: InputMaybe<Scalars['String']['input']>;
  coughduration?: InputMaybe<Scalars['String']['input']>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  dateOfLastExam?: InputMaybe<Scalars['String']['input']>;
  dateOfLastPhysicalExam?: InputMaybe<Scalars['String']['input']>;
  dentures?: InputMaybe<Scalars['String']['input']>;
  diabetes?: InputMaybe<Scalars['String']['input']>;
  difficultInBreathing?: InputMaybe<Scalars['String']['input']>;
  dryMouth?: InputMaybe<Scalars['String']['input']>;
  earaches?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  epilepsyConvulsions?: InputMaybe<Scalars['String']['input']>;
  extraEmergencyContactName?: InputMaybe<Scalars['String']['input']>;
  extraRelationship?: InputMaybe<Scalars['String']['input']>;
  foodTrap?: InputMaybe<Scalars['String']['input']>;
  forWomen?: InputMaybe<Scalars['String']['input']>;
  frequentSoreThroat?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  heartAttack?: InputMaybe<Scalars['String']['input']>;
  heartDisease?: InputMaybe<Scalars['String']['input']>;
  heartDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  hepatitis?: InputMaybe<Scalars['String']['input']>;
  highBloodPressure?: InputMaybe<Scalars['String']['input']>;
  hospitalization?: InputMaybe<Scalars['String']['input']>;
  ifYesWhatWasTheIllnessOrProblem?: InputMaybe<Scalars['String']['input']>;
  jointDisorder?: InputMaybe<Scalars['String']['input']>;
  jointReplacementOrImplants?: InputMaybe<Scalars['String']['input']>;
  kidneyDisease?: InputMaybe<Scalars['String']['input']>;
  kidneyDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  lactating?: InputMaybe<Scalars['String']['input']>;
  leukemia?: InputMaybe<Scalars['String']['input']>;
  livErDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  liverDisorder?: InputMaybe<Scalars['String']['input']>;
  lowBloodPressure?: InputMaybe<Scalars['String']['input']>;
  lungDisease?: InputMaybe<Scalars['String']['input']>;
  lungDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorder?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  othersSpecify?: InputMaybe<Scalars['String']['input']>;
  pastGap?: InputMaybe<Scalars['String']['input']>;
  pastOrthodonic?: InputMaybe<Scalars['String']['input']>;
  persistentCough?: InputMaybe<Scalars['String']['input']>;
  phonePhysician?: InputMaybe<Scalars['String']['input']>;
  physiciansName?: InputMaybe<Scalars['String']['input']>;
  prescriptionOrCounterMedications?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  psychiatricTreatment?: InputMaybe<Scalars['String']['input']>;
  radiationOrChemotherapy?: InputMaybe<Scalars['String']['input']>;
  recentWEightLoss?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
  relationshipNumber?: InputMaybe<Scalars['String']['input']>;
  secondRelationshipNumber?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['String']['input']>;
  serious?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  sores?: InputMaybe<Scalars['String']['input']>;
  specify?: InputMaybe<Scalars['String']['input']>;
  statusAppointment?: InputMaybe<Scalars['String']['input']>;
  steroidTherapy?: InputMaybe<Scalars['String']['input']>;
  stomachTroublesUlcers?: InputMaybe<Scalars['String']['input']>;
  stroke?: InputMaybe<Scalars['String']['input']>;
  tuberculosis?: InputMaybe<Scalars['String']['input']>;
  vitaminsNaturalOrHerbalSupplements?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
};

export type PatientUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PatientUpdateManyInput;
  /** Document search */
  where: PatientWhereInput;
};

export type PatientUpdateOneInlineInput = {
  /** Connect existing Patient document */
  connect?: InputMaybe<PatientWhereUniqueInput>;
  /** Create and connect one Patient document */
  create?: InputMaybe<PatientCreateInput>;
  /** Delete currently connected Patient document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected Patient document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single Patient document */
  update?: InputMaybe<PatientUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Patient document */
  upsert?: InputMaybe<PatientUpsertWithNestedWhereUniqueInput>;
};

export type PatientUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PatientUpdateInput;
  /** Unique document search */
  where: PatientWhereUniqueInput;
};

export type PatientUpsertInput = {
  /** Create document if it didn't exist */
  create: PatientCreateInput;
  /** Update document if it exists */
  update: PatientUpdateInput;
};

export type PatientUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PatientUpsertInput;
  /** Unique document search */
  where: PatientWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PatientWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type PatientWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PatientWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PatientWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PatientWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  active?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  active_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  active_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  active_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  active_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  active_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  active_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  active_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  active_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  active_starts_with?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  aidsHivInfection?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  aidsHivInfection_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  aidsHivInfection_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  aidsHivInfection_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  aidsHivInfection_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  aidsHivInfection_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  aidsHivInfection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  aidsHivInfection_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  aidsHivInfection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  aidsHivInfection_starts_with?: InputMaybe<Scalars['String']['input']>;
  alcoholIntake?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  alcoholIntake_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  alcoholIntake_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  alcoholIntake_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  alcoholIntake_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  alcoholIntake_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  alcoholIntake_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  alcoholIntake_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  alcoholIntake_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  alcoholIntake_starts_with?: InputMaybe<Scalars['String']['input']>;
  allergies?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  allergies_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  allergies_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  allergies_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  allergies_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  allergies_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  allergies_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  allergies_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  allergies_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  allergies_starts_with?: InputMaybe<Scalars['String']['input']>;
  amoutAndFrequency?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  amoutAndFrequency_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  amoutAndFrequency_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  amoutAndFrequency_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  amoutAndFrequency_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  amoutAndFrequency_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  amoutAndFrequency_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  amoutAndFrequency_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  amoutAndFrequency_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  amoutAndFrequency_starts_with?: InputMaybe<Scalars['String']['input']>;
  anemia?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  anemia_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  anemia_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  anemia_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  anemia_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  anemia_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  anemia_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  anemia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  anemia_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  anemia_starts_with?: InputMaybe<Scalars['String']['input']>;
  anyChangesInYourHealth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  anyChangesInYourHealth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  anyChangesInYourHealth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  anyChangesInYourHealth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  anyChangesInYourHealth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  anyChangesInYourHealth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  anyChangesInYourHealth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  anyChangesInYourHealth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  anyChangesInYourHealth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  anyChangesInYourHealth_starts_with?: InputMaybe<Scalars['String']['input']>;
  areYouInGoodHealth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  areYouInGoodHealth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  areYouInGoodHealth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  areYouInGoodHealth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  areYouInGoodHealth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  areYouInGoodHealth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  areYouInGoodHealth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  areYouInGoodHealth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  areYouInGoodHealth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  areYouInGoodHealth_starts_with?: InputMaybe<Scalars['String']['input']>;
  asthma?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  asthma_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  asthma_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  asthma_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  asthma_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  asthma_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  asthma_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  asthma_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  asthma_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  asthma_starts_with?: InputMaybe<Scalars['String']['input']>;
  beenExposed?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  beenExposed_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  beenExposed_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  beenExposed_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  beenExposed_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  beenExposed_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  beenExposed_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  beenExposed_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  beenExposed_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  beenExposed_starts_with?: InputMaybe<Scalars['String']['input']>;
  bleedingGums?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bleedingGums_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bleedingGums_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bleedingGums_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bleedingGums_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bleedingGums_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bleedingGums_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bleedingGums_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bleedingGums_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bleedingGums_starts_with?: InputMaybe<Scalars['String']['input']>;
  brainInjury?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  brainInjury_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  brainInjury_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  brainInjury_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  brainInjury_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  brainInjury_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  brainInjury_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  brainInjury_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  brainInjury_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  brainInjury_starts_with?: InputMaybe<Scalars['String']['input']>;
  bruxing?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  bruxing_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  bruxing_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  bruxing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  bruxing_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  bruxing_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  bruxing_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  bruxing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  bruxing_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  bruxing_starts_with?: InputMaybe<Scalars['String']['input']>;
  cancerOrTumor?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  cancerOrTumor_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  cancerOrTumor_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  cancerOrTumor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  cancerOrTumor_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  cancerOrTumor_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  cancerOrTumor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  cancerOrTumor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  cancerOrTumor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  cancerOrTumor_starts_with?: InputMaybe<Scalars['String']['input']>;
  careOfAPhysicians?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  careOfAPhysicians_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  careOfAPhysicians_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  careOfAPhysicians_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  careOfAPhysicians_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  careOfAPhysicians_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  careOfAPhysicians_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  careOfAPhysicians_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  careOfAPhysicians_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  careOfAPhysicians_starts_with?: InputMaybe<Scalars['String']['input']>;
  chestPains?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  chestPains_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  chestPains_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  chestPains_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  chestPains_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  chestPains_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  chestPains_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  chestPains_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  chestPains_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  chestPains_starts_with?: InputMaybe<Scalars['String']['input']>;
  clicking?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  clicking_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  clicking_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  clicking_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  clicking_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  clicking_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  clicking_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  clicking_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  clicking_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  clicking_starts_with?: InputMaybe<Scalars['String']['input']>;
  congenitalDisease?: InputMaybe<Scalars['String']['input']>;
  congenitalDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  congenitalDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  congenitalDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  congenitalDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  congenitalDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  congenitalDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  congenitalDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  congenitalDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  congenitalDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  congenitalDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  congenitalDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  congenitalDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  congenitalDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  congenitalDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  congenitalDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  congenitalDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  congenitalDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  congenitalDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  congenitalDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  contactNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  contactNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  contactNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  contactNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  contactNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  contactNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  contactNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  contactNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  contactNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  contactNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  coughWithBlood?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  coughWithBlood_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  coughWithBlood_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  coughWithBlood_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coughWithBlood_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  coughWithBlood_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  coughWithBlood_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  coughWithBlood_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  coughWithBlood_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  coughWithBlood_starts_with?: InputMaybe<Scalars['String']['input']>;
  coughduration?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  coughduration_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  coughduration_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  coughduration_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  coughduration_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  coughduration_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  coughduration_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  coughduration_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  coughduration_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  coughduration_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dateOfBirth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfBirth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfBirth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfBirth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfBirth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfBirth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfBirth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfBirth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfBirth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfBirth_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfLastExam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfLastExam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfLastExam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfLastExam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfLastExam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfLastExam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfLastExam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfLastExam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfLastExam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfLastExam_starts_with?: InputMaybe<Scalars['String']['input']>;
  dateOfLastPhysicalExam?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dateOfLastPhysicalExam_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dateOfLastPhysicalExam_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dateOfLastPhysicalExam_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dateOfLastPhysicalExam_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dateOfLastPhysicalExam_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dateOfLastPhysicalExam_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dateOfLastPhysicalExam_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dateOfLastPhysicalExam_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dateOfLastPhysicalExam_starts_with?: InputMaybe<Scalars['String']['input']>;
  dentures?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dentures_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dentures_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dentures_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dentures_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dentures_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dentures_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dentures_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dentures_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dentures_starts_with?: InputMaybe<Scalars['String']['input']>;
  diabetes?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  diabetes_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  diabetes_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  diabetes_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  diabetes_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  diabetes_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  diabetes_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  diabetes_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  diabetes_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  diabetes_starts_with?: InputMaybe<Scalars['String']['input']>;
  difficultInBreathing?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  difficultInBreathing_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  difficultInBreathing_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  difficultInBreathing_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  difficultInBreathing_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  difficultInBreathing_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  difficultInBreathing_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  difficultInBreathing_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  difficultInBreathing_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  difficultInBreathing_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<PatientWhereStageInput>;
  documentInStages_none?: InputMaybe<PatientWhereStageInput>;
  documentInStages_some?: InputMaybe<PatientWhereStageInput>;
  dryMouth?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  dryMouth_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  dryMouth_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  dryMouth_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  dryMouth_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  dryMouth_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  dryMouth_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  dryMouth_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  dryMouth_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  dryMouth_starts_with?: InputMaybe<Scalars['String']['input']>;
  earaches?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  earaches_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  earaches_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  earaches_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  earaches_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  earaches_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  earaches_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  earaches_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  earaches_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  earaches_starts_with?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  emergencyContactName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  emergencyContactName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  emergencyContactName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  emergencyContactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  emergencyContactName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  emergencyContactName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  emergencyContactName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  emergencyContactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  emergencyContactName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  emergencyContactName_starts_with?: InputMaybe<Scalars['String']['input']>;
  epilepsyConvulsions?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  epilepsyConvulsions_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  epilepsyConvulsions_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  epilepsyConvulsions_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  epilepsyConvulsions_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  epilepsyConvulsions_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  epilepsyConvulsions_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  epilepsyConvulsions_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  epilepsyConvulsions_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  epilepsyConvulsions_starts_with?: InputMaybe<Scalars['String']['input']>;
  extraEmergencyContactName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  extraEmergencyContactName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  extraEmergencyContactName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  extraEmergencyContactName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  extraEmergencyContactName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  extraEmergencyContactName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  extraEmergencyContactName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  extraEmergencyContactName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  extraEmergencyContactName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  extraEmergencyContactName_starts_with?: InputMaybe<Scalars['String']['input']>;
  extraRelationship?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  extraRelationship_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  extraRelationship_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  extraRelationship_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  extraRelationship_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  extraRelationship_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  extraRelationship_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  extraRelationship_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  extraRelationship_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  extraRelationship_starts_with?: InputMaybe<Scalars['String']['input']>;
  foodTrap?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  foodTrap_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  foodTrap_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  foodTrap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  foodTrap_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  foodTrap_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  foodTrap_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  foodTrap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  foodTrap_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  foodTrap_starts_with?: InputMaybe<Scalars['String']['input']>;
  forWomen?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  forWomen_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  forWomen_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  forWomen_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  forWomen_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  forWomen_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  forWomen_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  forWomen_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  forWomen_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  forWomen_starts_with?: InputMaybe<Scalars['String']['input']>;
  frequentSoreThroat?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  frequentSoreThroat_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  frequentSoreThroat_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  frequentSoreThroat_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  frequentSoreThroat_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  frequentSoreThroat_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  frequentSoreThroat_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  frequentSoreThroat_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  frequentSoreThroat_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  frequentSoreThroat_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  heartAttack?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartAttack_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartAttack_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartAttack_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartAttack_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartAttack_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartAttack_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartAttack_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartAttack_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartAttack_starts_with?: InputMaybe<Scalars['String']['input']>;
  heartDisease?: InputMaybe<Scalars['String']['input']>;
  heartDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  heartDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  heartDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  heartDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heartDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  heartDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  heartDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  heartDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  heartDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  heartDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  height_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  height_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  height_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  height_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  height_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  height_starts_with?: InputMaybe<Scalars['String']['input']>;
  hepatitis?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  hepatitis_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  hepatitis_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  hepatitis_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hepatitis_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  hepatitis_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  hepatitis_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  hepatitis_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  hepatitis_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  hepatitis_starts_with?: InputMaybe<Scalars['String']['input']>;
  highBloodPressure?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  highBloodPressure_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  highBloodPressure_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  highBloodPressure_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  highBloodPressure_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  highBloodPressure_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  highBloodPressure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  highBloodPressure_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  highBloodPressure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  highBloodPressure_starts_with?: InputMaybe<Scalars['String']['input']>;
  hospitalization?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  hospitalization_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  hospitalization_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  hospitalization_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  hospitalization_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  hospitalization_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  hospitalization_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  hospitalization_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  hospitalization_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  hospitalization_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  ifYesWhatWasTheIllnessOrProblem?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  ifYesWhatWasTheIllnessOrProblem_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  ifYesWhatWasTheIllnessOrProblem_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  ifYesWhatWasTheIllnessOrProblem_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ifYesWhatWasTheIllnessOrProblem_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  ifYesWhatWasTheIllnessOrProblem_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  ifYesWhatWasTheIllnessOrProblem_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  ifYesWhatWasTheIllnessOrProblem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  ifYesWhatWasTheIllnessOrProblem_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  ifYesWhatWasTheIllnessOrProblem_starts_with?: InputMaybe<Scalars['String']['input']>;
  jointDisorder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jointDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jointDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jointDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jointDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jointDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jointDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jointDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jointDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jointDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  jointReplacementOrImplants?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  jointReplacementOrImplants_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  jointReplacementOrImplants_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  jointReplacementOrImplants_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  jointReplacementOrImplants_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  jointReplacementOrImplants_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  jointReplacementOrImplants_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  jointReplacementOrImplants_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  jointReplacementOrImplants_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  jointReplacementOrImplants_starts_with?: InputMaybe<Scalars['String']['input']>;
  kidneyDisease?: InputMaybe<Scalars['String']['input']>;
  kidneyDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  kidneyDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  kidneyDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  kidneyDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  kidneyDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  kidneyDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  kidneyDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  kidneyDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  kidneyDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  kidneyDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  kidneyDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  kidneyDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  kidneyDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  kidneyDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  kidneyDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  kidneyDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  kidneyDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  kidneyDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  kidneyDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  lactating?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lactating_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lactating_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lactating_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lactating_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lactating_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lactating_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lactating_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lactating_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lactating_starts_with?: InputMaybe<Scalars['String']['input']>;
  leukemia?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  leukemia_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  leukemia_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  leukemia_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  leukemia_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  leukemia_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  leukemia_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  leukemia_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  leukemia_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  leukemia_starts_with?: InputMaybe<Scalars['String']['input']>;
  livErDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  livErDisorderSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  livErDisorderSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  livErDisorderSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  livErDisorderSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  livErDisorderSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  livErDisorderSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  livErDisorderSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  livErDisorderSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  livErDisorderSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  liverDisorder?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  liverDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  liverDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  liverDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  liverDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  liverDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  liverDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  liverDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  liverDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  liverDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  lowBloodPressure?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lowBloodPressure_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lowBloodPressure_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lowBloodPressure_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lowBloodPressure_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lowBloodPressure_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lowBloodPressure_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lowBloodPressure_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lowBloodPressure_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lowBloodPressure_starts_with?: InputMaybe<Scalars['String']['input']>;
  lungDisease?: InputMaybe<Scalars['String']['input']>;
  lungDiseaseSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lungDiseaseSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lungDiseaseSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lungDiseaseSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lungDiseaseSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lungDiseaseSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lungDiseaseSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lungDiseaseSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lungDiseaseSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lungDiseaseSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  lungDisease_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  lungDisease_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  lungDisease_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lungDisease_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  lungDisease_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  lungDisease_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  lungDisease_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  lungDisease_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  lungDisease_starts_with?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorder?: InputMaybe<Scalars['String']['input']>;
  neurologicalDisorderSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  neurologicalDisorderSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  neurologicalDisorderSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  neurologicalDisorderSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neurologicalDisorderSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  neurologicalDisorderSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  neurologicalDisorderSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  neurologicalDisorderSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  neurologicalDisorderSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  neurologicalDisorderSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  neurologicalDisorder_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  neurologicalDisorder_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  neurologicalDisorder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  neurologicalDisorder_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  neurologicalDisorder_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  neurologicalDisorder_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  neurologicalDisorder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  neurologicalDisorder_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  neurologicalDisorder_starts_with?: InputMaybe<Scalars['String']['input']>;
  newSchedules_every?: InputMaybe<NewScheduleWhereInput>;
  newSchedules_none?: InputMaybe<NewScheduleWhereInput>;
  newSchedules_some?: InputMaybe<NewScheduleWhereInput>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  othersSpecify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  othersSpecify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  othersSpecify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  othersSpecify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  othersSpecify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  othersSpecify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  othersSpecify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  othersSpecify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  othersSpecify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  othersSpecify_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  others_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  others_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  others_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  others_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  others_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  others_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  others_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  others_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  others_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastGap?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pastGap_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pastGap_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pastGap_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pastGap_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pastGap_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pastGap_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pastGap_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pastGap_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pastGap_starts_with?: InputMaybe<Scalars['String']['input']>;
  pastOrthodonic?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  pastOrthodonic_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  pastOrthodonic_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  pastOrthodonic_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  pastOrthodonic_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  pastOrthodonic_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  pastOrthodonic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  pastOrthodonic_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  pastOrthodonic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  pastOrthodonic_starts_with?: InputMaybe<Scalars['String']['input']>;
  persistentCough?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  persistentCough_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  persistentCough_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  persistentCough_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  persistentCough_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  persistentCough_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  persistentCough_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  persistentCough_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  persistentCough_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  persistentCough_starts_with?: InputMaybe<Scalars['String']['input']>;
  phonePhysician?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phonePhysician_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phonePhysician_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phonePhysician_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phonePhysician_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phonePhysician_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phonePhysician_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phonePhysician_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phonePhysician_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phonePhysician_starts_with?: InputMaybe<Scalars['String']['input']>;
  physiciansName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  physiciansName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  physiciansName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  physiciansName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  physiciansName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  physiciansName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  physiciansName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  physiciansName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  physiciansName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  physiciansName_starts_with?: InputMaybe<Scalars['String']['input']>;
  prescriptionOrCounterMedications?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  prescriptionOrCounterMedications_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  prescriptionOrCounterMedications_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  prescriptionOrCounterMedications_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  prescriptionOrCounterMedications_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  prescriptionOrCounterMedications_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  prescriptionOrCounterMedications_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  prescriptionOrCounterMedications_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  prescriptionOrCounterMedications_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  prescriptionOrCounterMedications_starts_with?: InputMaybe<Scalars['String']['input']>;
  problem?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  problem_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  problem_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  problem_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  problem_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  problem_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  problem_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  problem_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  problem_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  problem_starts_with?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<AssetWhereInput>;
  psychiatricTreatment?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  psychiatricTreatment_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  psychiatricTreatment_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  psychiatricTreatment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  psychiatricTreatment_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  psychiatricTreatment_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  psychiatricTreatment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  psychiatricTreatment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  psychiatricTreatment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  psychiatricTreatment_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  radiationOrChemotherapy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  radiationOrChemotherapy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  radiationOrChemotherapy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  radiationOrChemotherapy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  radiationOrChemotherapy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  radiationOrChemotherapy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  radiationOrChemotherapy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  radiationOrChemotherapy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  radiationOrChemotherapy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  radiationOrChemotherapy_starts_with?: InputMaybe<Scalars['String']['input']>;
  recentWEightLoss?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  recentWEightLoss_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  recentWEightLoss_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  recentWEightLoss_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  recentWEightLoss_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  recentWEightLoss_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  recentWEightLoss_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  recentWEightLoss_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  recentWEightLoss_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  recentWEightLoss_starts_with?: InputMaybe<Scalars['String']['input']>;
  relationship?: InputMaybe<Scalars['String']['input']>;
  relationshipNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relationshipNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relationshipNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relationshipNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relationshipNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relationshipNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relationshipNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relationshipNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relationshipNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relationshipNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  relationship_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  relationship_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  relationship_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  relationship_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  relationship_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  relationship_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  relationship_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  relationship_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  relationship_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  secondRelationshipNumber?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  secondRelationshipNumber_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  secondRelationshipNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  secondRelationshipNumber_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  secondRelationshipNumber_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  secondRelationshipNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  secondRelationshipNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  secondRelationshipNumber_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  secondRelationshipNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  secondRelationshipNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  sensitive?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sensitive_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sensitive_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sensitive_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sensitive_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sensitive_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sensitive_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sensitive_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sensitive_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sensitive_starts_with?: InputMaybe<Scalars['String']['input']>;
  serious?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  serious_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  serious_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  serious_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  serious_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  serious_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  serious_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  serious_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  serious_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  serious_starts_with?: InputMaybe<Scalars['String']['input']>;
  sex?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sex_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sex_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sex_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sex_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sex_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sex_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sex_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sex_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sex_starts_with?: InputMaybe<Scalars['String']['input']>;
  sores?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  sores_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  sores_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  sores_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sores_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  sores_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  sores_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  sores_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  sores_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  sores_starts_with?: InputMaybe<Scalars['String']['input']>;
  specify?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  specify_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  specify_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  specify_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  specify_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  specify_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  specify_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  specify_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  specify_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  specify_starts_with?: InputMaybe<Scalars['String']['input']>;
  statusAppointment?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  statusAppointment_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  statusAppointment_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  statusAppointment_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  statusAppointment_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  statusAppointment_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  statusAppointment_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  statusAppointment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  statusAppointment_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  statusAppointment_starts_with?: InputMaybe<Scalars['String']['input']>;
  steroidTherapy?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  steroidTherapy_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  steroidTherapy_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  steroidTherapy_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  steroidTherapy_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  steroidTherapy_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  steroidTherapy_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  steroidTherapy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  steroidTherapy_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  steroidTherapy_starts_with?: InputMaybe<Scalars['String']['input']>;
  stomachTroublesUlcers?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  stomachTroublesUlcers_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  stomachTroublesUlcers_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  stomachTroublesUlcers_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stomachTroublesUlcers_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  stomachTroublesUlcers_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  stomachTroublesUlcers_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  stomachTroublesUlcers_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  stomachTroublesUlcers_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  stomachTroublesUlcers_starts_with?: InputMaybe<Scalars['String']['input']>;
  stroke?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  stroke_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  stroke_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  stroke_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  stroke_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  stroke_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  stroke_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  stroke_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  stroke_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  stroke_starts_with?: InputMaybe<Scalars['String']['input']>;
  tuberculosis?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  tuberculosis_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  tuberculosis_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  tuberculosis_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  tuberculosis_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  tuberculosis_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  tuberculosis_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  tuberculosis_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  tuberculosis_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  tuberculosis_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  vitaminsNaturalOrHerbalSupplements?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  vitaminsNaturalOrHerbalSupplements_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  vitaminsNaturalOrHerbalSupplements_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  vitaminsNaturalOrHerbalSupplements_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  vitaminsNaturalOrHerbalSupplements_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  vitaminsNaturalOrHerbalSupplements_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  vitaminsNaturalOrHerbalSupplements_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  vitaminsNaturalOrHerbalSupplements_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  vitaminsNaturalOrHerbalSupplements_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  vitaminsNaturalOrHerbalSupplements_starts_with?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  weight_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  weight_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  weight_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  weight_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  weight_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  weight_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  weight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  weight_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  weight_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PatientWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PatientWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PatientWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PatientWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PatientWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Patient record uniquely */
export type PatientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single getSlider */
  getSlider?: Maybe<GetSlider>;
  /** Retrieve document version */
  getSliderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple getSliders */
  getSliders: Array<GetSlider>;
  /** Retrieve multiple getSliders using the Relay connection interface */
  getSlidersConnection: GetSliderConnection;
  /** Retrieve a single medicalTeam */
  medicalTeam?: Maybe<MedicalTeam>;
  /** Retrieve document version */
  medicalTeamVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple medicalTeams */
  medicalTeams: Array<MedicalTeam>;
  /** Retrieve multiple medicalTeams using the Relay connection interface */
  medicalTeamsConnection: MedicalTeamConnection;
  /** Retrieve a single newSchedule */
  newSchedule?: Maybe<NewSchedule>;
  /** Retrieve document version */
  newScheduleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newSchedules */
  newSchedules: Array<NewSchedule>;
  /** Retrieve multiple newSchedules using the Relay connection interface */
  newSchedulesConnection: NewScheduleConnection;
  /** Retrieve a single newsFeed */
  newsFeed?: Maybe<NewsFeed>;
  /** Retrieve document version */
  newsFeedVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newsFeeds */
  newsFeeds: Array<NewsFeed>;
  /** Retrieve multiple newsFeeds using the Relay connection interface */
  newsFeedsConnection: NewsFeedConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single patient */
  patient?: Maybe<Patient>;
  /** Retrieve document version */
  patientVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple patients */
  patients: Array<Patient>;
  /** Retrieve multiple patients using the Relay connection interface */
  patientsConnection: PatientConnection;
  /** Retrieve a single requestUserEformPdf */
  requestUserEformPdf?: Maybe<RequestUserEformPdf>;
  /** Retrieve document version */
  requestUserEformPdfVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple requestUserEformPdfs */
  requestUserEformPdfs: Array<RequestUserEformPdf>;
  /** Retrieve multiple requestUserEformPdfs using the Relay connection interface */
  requestUserEformPdfsConnection: RequestUserEformPdfConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single tipsGuide */
  tipsGuide?: Maybe<TipsGuide>;
  /** Retrieve document version */
  tipsGuideVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple tipsGuides */
  tipsGuides: Array<TipsGuide>;
  /** Retrieve multiple tipsGuides using the Relay connection interface */
  tipsGuidesConnection: TipsGuideConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single uzLab */
  uzLab?: Maybe<UzLab>;
  /** Retrieve document version */
  uzLabVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple uzLabs */
  uzLabs: Array<UzLab>;
  /** Retrieve multiple uzLabs using the Relay connection interface */
  uzLabsConnection: UzLabConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  where: Array<EntityWhereInput>;
};


export type QueryGetSliderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: GetSliderWhereUniqueInput;
};


export type QueryGetSliderVersionArgs = {
  where: VersionWhereInput;
};


export type QueryGetSlidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GetSliderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GetSliderWhereInput>;
};


export type QueryGetSlidersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<GetSliderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<GetSliderWhereInput>;
};


export type QueryMedicalTeamArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MedicalTeamWhereUniqueInput;
};


export type QueryMedicalTeamVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMedicalTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MedicalTeamOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MedicalTeamWhereInput>;
};


export type QueryMedicalTeamsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MedicalTeamOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<MedicalTeamWhereInput>;
};


export type QueryNewScheduleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewScheduleWhereUniqueInput;
};


export type QueryNewScheduleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewSchedulesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewScheduleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewScheduleWhereInput>;
};


export type QueryNewSchedulesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewScheduleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewScheduleWhereInput>;
};


export type QueryNewsFeedArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewsFeedWhereUniqueInput;
};


export type QueryNewsFeedVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewsFeedsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsFeedOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsFeedWhereInput>;
};


export type QueryNewsFeedsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsFeedOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<NewsFeedWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPatientArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PatientWhereUniqueInput;
};


export type QueryPatientVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPatientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PatientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PatientWhereInput>;
};


export type QueryPatientsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PatientOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<PatientWhereInput>;
};


export type QueryRequestUserEformPdfArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: RequestUserEformPdfWhereUniqueInput;
};


export type QueryRequestUserEformPdfVersionArgs = {
  where: VersionWhereInput;
};


export type QueryRequestUserEformPdfsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RequestUserEformPdfOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RequestUserEformPdfWhereInput>;
};


export type QueryRequestUserEformPdfsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<RequestUserEformPdfOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<RequestUserEformPdfWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryTipsGuideArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TipsGuideWhereUniqueInput;
};


export type QueryTipsGuideVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTipsGuidesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TipsGuideOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TipsGuideWhereInput>;
};


export type QueryTipsGuidesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TipsGuideOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<TipsGuideWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUzLabArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UzLabWhereUniqueInput;
};


export type QueryUzLabVersionArgs = {
  where: VersionWhereInput;
};


export type QueryUzLabsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UzLabOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UzLabWhereInput>;
};


export type QueryUzLabsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UzLabOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  stage?: Stage;
  where?: InputMaybe<UzLabWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency']['output'];
  b: Scalars['RGBAHue']['output'];
  g: Scalars['RGBAHue']['output'];
  r: Scalars['RGBAHue']['output'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input'];
  b: Scalars['RGBAHue']['input'];
  g: Scalars['RGBAHue']['input'];
  r: Scalars['RGBAHue']['input'];
};

export type RequestUserEformPdf = Entity & Node & {
  __typename?: 'RequestUserEformPdf';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<RequestUserEformPdf>;
  eFormPdf?: Maybe<Asset>;
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  /** List of RequestUserEformPdf versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  requestUserEformPdf?: Maybe<Scalars['String']['output']>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type RequestUserEformPdfCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RequestUserEformPdfDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type RequestUserEformPdfEFormPdfArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  where?: InputMaybe<AssetSingleRelationWhereInput>;
};


export type RequestUserEformPdfHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type RequestUserEformPdfPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type RequestUserEformPdfScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type RequestUserEformPdfUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type RequestUserEformPdfConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: RequestUserEformPdfWhereUniqueInput;
};

/** A connection to a list of items. */
export type RequestUserEformPdfConnection = {
  __typename?: 'RequestUserEformPdfConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<RequestUserEformPdfEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type RequestUserEformPdfCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  eFormPdf?: InputMaybe<AssetCreateOneInlineInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  requestUserEformPdf?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RequestUserEformPdfCreateManyInlineInput = {
  /** Connect multiple existing RequestUserEformPdf documents */
  connect?: InputMaybe<Array<RequestUserEformPdfWhereUniqueInput>>;
  /** Create and connect multiple existing RequestUserEformPdf documents */
  create?: InputMaybe<Array<RequestUserEformPdfCreateInput>>;
};

export type RequestUserEformPdfCreateOneInlineInput = {
  /** Connect one existing RequestUserEformPdf document */
  connect?: InputMaybe<RequestUserEformPdfWhereUniqueInput>;
  /** Create and connect one RequestUserEformPdf document */
  create?: InputMaybe<RequestUserEformPdfCreateInput>;
};

/** An edge in a connection. */
export type RequestUserEformPdfEdge = {
  __typename?: 'RequestUserEformPdfEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RequestUserEformPdf;
};

/** Identifies documents */
export type RequestUserEformPdfManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  documentInStages_none?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  documentInStages_some?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  eFormPdf?: InputMaybe<AssetWhereInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  requestUserEformPdf?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  requestUserEformPdf_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  requestUserEformPdf_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  requestUserEformPdf_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  requestUserEformPdf_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  requestUserEformPdf_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  requestUserEformPdf_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  requestUserEformPdf_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  requestUserEformPdf_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  requestUserEformPdf_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum RequestUserEformPdfOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  RequestUserEformPdfAsc = 'requestUserEformPdf_ASC',
  RequestUserEformPdfDesc = 'requestUserEformPdf_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type RequestUserEformPdfUpdateInput = {
  eFormPdf?: InputMaybe<AssetUpdateOneInlineInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  requestUserEformPdf?: InputMaybe<Scalars['String']['input']>;
};

export type RequestUserEformPdfUpdateManyInlineInput = {
  /** Connect multiple existing RequestUserEformPdf documents */
  connect?: InputMaybe<Array<RequestUserEformPdfConnectInput>>;
  /** Create and connect multiple RequestUserEformPdf documents */
  create?: InputMaybe<Array<RequestUserEformPdfCreateInput>>;
  /** Delete multiple RequestUserEformPdf documents */
  delete?: InputMaybe<Array<RequestUserEformPdfWhereUniqueInput>>;
  /** Disconnect multiple RequestUserEformPdf documents */
  disconnect?: InputMaybe<Array<RequestUserEformPdfWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing RequestUserEformPdf documents */
  set?: InputMaybe<Array<RequestUserEformPdfWhereUniqueInput>>;
  /** Update multiple RequestUserEformPdf documents */
  update?: InputMaybe<Array<RequestUserEformPdfUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple RequestUserEformPdf documents */
  upsert?: InputMaybe<Array<RequestUserEformPdfUpsertWithNestedWhereUniqueInput>>;
};

export type RequestUserEformPdfUpdateManyInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  requestUserEformPdf?: InputMaybe<Scalars['String']['input']>;
};

export type RequestUserEformPdfUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RequestUserEformPdfUpdateManyInput;
  /** Document search */
  where: RequestUserEformPdfWhereInput;
};

export type RequestUserEformPdfUpdateOneInlineInput = {
  /** Connect existing RequestUserEformPdf document */
  connect?: InputMaybe<RequestUserEformPdfWhereUniqueInput>;
  /** Create and connect one RequestUserEformPdf document */
  create?: InputMaybe<RequestUserEformPdfCreateInput>;
  /** Delete currently connected RequestUserEformPdf document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected RequestUserEformPdf document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single RequestUserEformPdf document */
  update?: InputMaybe<RequestUserEformPdfUpdateWithNestedWhereUniqueInput>;
  /** Upsert single RequestUserEformPdf document */
  upsert?: InputMaybe<RequestUserEformPdfUpsertWithNestedWhereUniqueInput>;
};

export type RequestUserEformPdfUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RequestUserEformPdfUpdateInput;
  /** Unique document search */
  where: RequestUserEformPdfWhereUniqueInput;
};

export type RequestUserEformPdfUpsertInput = {
  /** Create document if it didn't exist */
  create: RequestUserEformPdfCreateInput;
  /** Update document if it exists */
  update: RequestUserEformPdfUpdateInput;
};

export type RequestUserEformPdfUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RequestUserEformPdfUpsertInput;
  /** Unique document search */
  where: RequestUserEformPdfWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type RequestUserEformPdfWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type RequestUserEformPdfWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RequestUserEformPdfWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  documentInStages_none?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  documentInStages_some?: InputMaybe<RequestUserEformPdfWhereStageInput>;
  eFormPdf?: InputMaybe<AssetWhereInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  requestUserEformPdf?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  requestUserEformPdf_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  requestUserEformPdf_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  requestUserEformPdf_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  requestUserEformPdf_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  requestUserEformPdf_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  requestUserEformPdf_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  requestUserEformPdf_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  requestUserEformPdf_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  requestUserEformPdf_starts_with?: InputMaybe<Scalars['String']['input']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type RequestUserEformPdfWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RequestUserEformPdfWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RequestUserEformPdfWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RequestUserEformPdfWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<RequestUserEformPdfWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References RequestUserEformPdf record uniquely */
export type RequestUserEformPdfWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String']['output'];
  /** Returns Markdown representation */
  markdown: Scalars['String']['output'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Entity & Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | GetSlider | MedicalTeam | NewSchedule | NewsFeed | Patient | RequestUserEformPdf | TipsGuide | UzLab;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Entity & Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum StausAppointment {
  Approved = 'APPROVED',
  Pending = 'PENDING'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type TipsGuide = Entity & Node & {
  __typename?: 'TipsGuide';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']['output']>;
  /** Get the document in other stages */
  documentInStages: Array<TipsGuide>;
  /** List of TipsGuide versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  image: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type TipsGuideCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TipsGuideDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type TipsGuideHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type TipsGuideImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type TipsGuidePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type TipsGuideScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TipsGuideUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type TipsGuideConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TipsGuideWhereUniqueInput;
};

/** A connection to a list of items. */
export type TipsGuideConnection = {
  __typename?: 'TipsGuideConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TipsGuideEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TipsGuideCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TipsGuideCreateManyInlineInput = {
  /** Connect multiple existing TipsGuide documents */
  connect?: InputMaybe<Array<TipsGuideWhereUniqueInput>>;
  /** Create and connect multiple existing TipsGuide documents */
  create?: InputMaybe<Array<TipsGuideCreateInput>>;
};

export type TipsGuideCreateOneInlineInput = {
  /** Connect one existing TipsGuide document */
  connect?: InputMaybe<TipsGuideWhereUniqueInput>;
  /** Create and connect one TipsGuide document */
  create?: InputMaybe<TipsGuideCreateInput>;
};

/** An edge in a connection. */
export type TipsGuideEdge = {
  __typename?: 'TipsGuideEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: TipsGuide;
};

/** Identifies documents */
export type TipsGuideManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TipsGuideWhereStageInput>;
  documentInStages_none?: InputMaybe<TipsGuideWhereStageInput>;
  documentInStages_some?: InputMaybe<TipsGuideWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TipsGuideOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TipsGuideUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<AssetUpdateManyInlineInput>;
};

export type TipsGuideUpdateManyInlineInput = {
  /** Connect multiple existing TipsGuide documents */
  connect?: InputMaybe<Array<TipsGuideConnectInput>>;
  /** Create and connect multiple TipsGuide documents */
  create?: InputMaybe<Array<TipsGuideCreateInput>>;
  /** Delete multiple TipsGuide documents */
  delete?: InputMaybe<Array<TipsGuideWhereUniqueInput>>;
  /** Disconnect multiple TipsGuide documents */
  disconnect?: InputMaybe<Array<TipsGuideWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TipsGuide documents */
  set?: InputMaybe<Array<TipsGuideWhereUniqueInput>>;
  /** Update multiple TipsGuide documents */
  update?: InputMaybe<Array<TipsGuideUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TipsGuide documents */
  upsert?: InputMaybe<Array<TipsGuideUpsertWithNestedWhereUniqueInput>>;
};

export type TipsGuideUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
};

export type TipsGuideUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TipsGuideUpdateManyInput;
  /** Document search */
  where: TipsGuideWhereInput;
};

export type TipsGuideUpdateOneInlineInput = {
  /** Connect existing TipsGuide document */
  connect?: InputMaybe<TipsGuideWhereUniqueInput>;
  /** Create and connect one TipsGuide document */
  create?: InputMaybe<TipsGuideCreateInput>;
  /** Delete currently connected TipsGuide document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected TipsGuide document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single TipsGuide document */
  update?: InputMaybe<TipsGuideUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TipsGuide document */
  upsert?: InputMaybe<TipsGuideUpsertWithNestedWhereUniqueInput>;
};

export type TipsGuideUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TipsGuideUpdateInput;
  /** Unique document search */
  where: TipsGuideWhereUniqueInput;
};

export type TipsGuideUpsertInput = {
  /** Create document if it didn't exist */
  create: TipsGuideCreateInput;
  /** Update document if it exists */
  update: TipsGuideUpdateInput;
};

export type TipsGuideUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TipsGuideUpsertInput;
  /** Unique document search */
  where: TipsGuideWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type TipsGuideWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type TipsGuideWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TipsGuideWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  documentInStages_every?: InputMaybe<TipsGuideWhereStageInput>;
  documentInStages_none?: InputMaybe<TipsGuideWhereStageInput>;
  documentInStages_some?: InputMaybe<TipsGuideWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  image_every?: InputMaybe<AssetWhereInput>;
  image_none?: InputMaybe<AssetWhereInput>;
  image_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TipsGuideWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TipsGuideWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TipsGuideWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TipsGuideWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TipsGuideWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References TipsGuide record uniquely */
export type TipsGuideWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export enum Title {
  Clinician = 'Clinician',
  Doctor = 'Doctor'
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Entity & Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String']['output'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UzLab = Entity & Node & {
  __typename?: 'UzLab';
  address?: Maybe<Scalars['String']['output']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<UzLab>;
  email?: Maybe<Scalars['String']['output']>;
  /** List of UzLab versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID']['output'];
  images: Array<Asset>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type UzLabCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type UzLabDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input'];
  inheritLocale?: Scalars['Boolean']['input'];
  stages?: Array<Stage>;
};


export type UzLabHistoryArgs = {
  limit?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
  stageOverride?: InputMaybe<Stage>;
};


export type UzLabImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type UzLabPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type UzLabScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type UzLabUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type UzLabConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UzLabWhereUniqueInput;
};

/** A connection to a list of items. */
export type UzLabConnection = {
  __typename?: 'UzLabConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UzLabEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UzLabCreateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetCreateManyInlineInput>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UzLabCreateManyInlineInput = {
  /** Connect multiple existing UzLab documents */
  connect?: InputMaybe<Array<UzLabWhereUniqueInput>>;
  /** Create and connect multiple existing UzLab documents */
  create?: InputMaybe<Array<UzLabCreateInput>>;
};

export type UzLabCreateOneInlineInput = {
  /** Connect one existing UzLab document */
  connect?: InputMaybe<UzLabWhereUniqueInput>;
  /** Create and connect one UzLab document */
  create?: InputMaybe<UzLabCreateInput>;
};

/** An edge in a connection. */
export type UzLabEdge = {
  __typename?: 'UzLabEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: UzLab;
};

/** Identifies documents */
export type UzLabManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UzLabWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UzLabWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UzLabWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<UzLabWhereStageInput>;
  documentInStages_none?: InputMaybe<UzLabWhereStageInput>;
  documentInStages_some?: InputMaybe<UzLabWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum UzLabOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UzLabUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UzLabUpdateManyInlineInput = {
  /** Connect multiple existing UzLab documents */
  connect?: InputMaybe<Array<UzLabConnectInput>>;
  /** Create and connect multiple UzLab documents */
  create?: InputMaybe<Array<UzLabCreateInput>>;
  /** Delete multiple UzLab documents */
  delete?: InputMaybe<Array<UzLabWhereUniqueInput>>;
  /** Disconnect multiple UzLab documents */
  disconnect?: InputMaybe<Array<UzLabWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing UzLab documents */
  set?: InputMaybe<Array<UzLabWhereUniqueInput>>;
  /** Update multiple UzLab documents */
  update?: InputMaybe<Array<UzLabUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple UzLab documents */
  upsert?: InputMaybe<Array<UzLabUpsertWithNestedWhereUniqueInput>>;
};

export type UzLabUpdateManyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type UzLabUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: UzLabUpdateManyInput;
  /** Document search */
  where: UzLabWhereInput;
};

export type UzLabUpdateOneInlineInput = {
  /** Connect existing UzLab document */
  connect?: InputMaybe<UzLabWhereUniqueInput>;
  /** Create and connect one UzLab document */
  create?: InputMaybe<UzLabCreateInput>;
  /** Delete currently connected UzLab document */
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  /** Disconnect currently connected UzLab document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update single UzLab document */
  update?: InputMaybe<UzLabUpdateWithNestedWhereUniqueInput>;
  /** Upsert single UzLab document */
  upsert?: InputMaybe<UzLabUpsertWithNestedWhereUniqueInput>;
};

export type UzLabUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: UzLabUpdateInput;
  /** Unique document search */
  where: UzLabWhereUniqueInput;
};

export type UzLabUpsertInput = {
  /** Create document if it didn't exist */
  create: UzLabCreateInput;
  /** Update document if it exists */
  update: UzLabUpdateInput;
};

export type UzLabUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: UzLabUpsertInput;
  /** Unique document search */
  where: UzLabWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type UzLabWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Identifies documents */
export type UzLabWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UzLabWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UzLabWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UzLabWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  address_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<UzLabWhereStageInput>;
  documentInStages_none?: InputMaybe<UzLabWhereStageInput>;
  documentInStages_some?: InputMaybe<UzLabWhereStageInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']['input']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']['input']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UzLabWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UzLabWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UzLabWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UzLabWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UzLabWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References UzLab record uniquely */
export type UzLabWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  revision: Scalars['Int']['output'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID']['input'];
  revision: Scalars['Int']['input'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetPatienListQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPatienListQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', address?: string | null, contactNumber?: string | null, fullName?: string | null, email?: string | null, id: string, occupation?: string | null, sex?: string | null, statusAppointment?: string | null, height?: string | null, dateOfBirth?: string | null, weight?: string | null, createdAt: any, profileImage?: { __typename?: 'Asset', url: string } | null }> };

export type GetNewScheduleQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewScheduleQuery = { __typename?: 'Query', newSchedules: Array<{ __typename?: 'NewSchedule', scheduleStatus?: string | null, scheduleDate?: string | null, room?: string | null, id: string, contactNumber?: string | null, createdAt: any, email?: string | null, clinician?: string | null, time?: string | null, location?: { __typename?: 'Location', latitude: number, longitude: number } | null, patients: Array<{ __typename?: 'Patient', email?: string | null, fullName?: string | null, id: string, profileImage?: { __typename?: 'Asset', url: string, id: string } | null }> }> };

export type GetSliderQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSliderQuery = { __typename?: 'Query', getSliders: Array<{ __typename?: 'GetSlider', id: string, name?: string | null, image?: { __typename?: 'Asset', url: string } | null }> };

export type GetMedicalTeamQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMedicalTeamQuery = { __typename?: 'Query', medicalTeams: Array<{ __typename?: 'MedicalTeam', id: string, title?: Title | null, aboutDoctor?: string | null, fullName?: string | null, email?: string | null, phoneNumber?: string | null, profileImage?: { __typename?: 'Asset', url: string, id: string } | null, location?: { __typename?: 'Location', latitude: number, longitude: number } | null }> };

export type Get_Tipsguide_DataQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Tipsguide_DataQuery = { __typename?: 'Query', tipsGuides: Array<{ __typename?: 'TipsGuide', id: string, description?: string | null, image: Array<{ __typename?: 'Asset', url: string }> }> };

export type Getuzlabs_DataQueryVariables = Exact<{ [key: string]: never; }>;


export type Getuzlabs_DataQuery = { __typename?: 'Query', uzLabs: Array<{ __typename?: 'UzLab', address?: string | null, email?: string | null, id: string, name?: string | null, phone?: string | null, images: Array<{ __typename?: 'Asset', url: string, id: string }>, location?: { __typename?: 'Location', latitude: number, longitude: number } | null }> };

export type GetNewsFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsFeedQuery = { __typename?: 'Query', newsFeeds: Array<{ __typename?: 'NewsFeed', title?: string | null, id: string, description?: string | null, images: Array<{ __typename?: 'Asset', url: string }> }> };

export type GetDataCharttingQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetDataCharttingQuery = { __typename?: 'Query', newSchedules: Array<{ __typename?: 'NewSchedule', charting?: { __typename?: 'Asset', url: string } | null, patients: Array<{ __typename?: 'Patient', id: string }> }> };

export type GetUserPersonalInformationQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserPersonalInformationQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, fullName?: string | null, contactNumber?: string | null, dateOfBirth?: string | null, height?: string | null, weight?: string | null, sex?: string | null, occupation?: string | null, emergencyContactName?: string | null, relationship?: string | null, relationshipNumber?: string | null, extraEmergencyContactName?: string | null, secondRelationshipNumber?: string | null, coughduration?: string | null, coughWithBlood?: string | null, beenExposed?: string | null, tuberculosis?: string | null, extraRelationship?: string | null }> };

export type GetUserDentalInformationQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserDentalInformationQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, fullName?: string | null, bleedingGums?: string | null, sensitive?: string | null, foodTrap?: string | null, dryMouth?: string | null, pastGap?: string | null, pastOrthodonic?: string | null, problem?: string | null, earaches?: string | null, clicking?: string | null, bruxing?: string | null, sores?: string | null, dentures?: string | null, active?: string | null, serious?: string | null, dateOfLastExam?: string | null }> };

export type GetUserMedicalInformationQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserMedicalInformationQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, careOfAPhysicians?: string | null, physiciansName?: string | null, phonePhysician?: string | null, areYouInGoodHealth?: string | null, anyChangesInYourHealth?: string | null, hospitalization?: string | null, prescriptionOrCounterMedications?: string | null, allergies?: string | null, specify?: string | null, alcoholIntake?: string | null, amoutAndFrequency?: string | null, forWomen?: string | null, lactating?: string | null, ifYesWhatWasTheIllnessOrProblem?: string | null, dateOfLastPhysicalExam?: string | null, vitaminsNaturalOrHerbalSupplements?: string | null }> };

export type GetUserQuestionnaireQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GetUserQuestionnaireQuery = { __typename?: 'Query', patients: Array<{ __typename?: 'Patient', id: string, fullName?: string | null, highBloodPressure?: string | null, heartAttack?: string | null, heartDisease?: string | null, heartDiseaseSpecify?: string | null, lowBloodPressure?: string | null, leukemia?: string | null, anemia?: string | null, kidneyDisease?: string | null, kidneyDiseaseSpecify?: string | null, asthma?: string | null, lungDisease?: string | null, lungDiseaseSpecify?: string | null, stroke?: string | null, neurologicalDisorder?: string | null, neurologicalDisorderSpecify?: string | null, epilepsyConvulsions?: string | null, brainInjury?: string | null, psychiatricTreatment?: string | null, diabetes?: string | null, aidsHivInfection?: string | null, congenitalDisease?: string | null, congenitalDiseaseSpecify?: string | null, hepatitis?: string | null, liverDisorder?: string | null, livErDisorderSpecify?: string | null, jointDisorder?: string | null, jointReplacementOrImplants?: string | null, steroidTherapy?: string | null, stomachTroublesUlcers?: string | null, chestPains?: string | null, frequentSoreThroat?: string | null, persistentCough?: string | null, difficultInBreathing?: string | null, cancerOrTumor?: string | null, radiationOrChemotherapy?: string | null, recentWEightLoss?: string | null, others?: string | null, othersSpecify?: string | null }> };

export type EFormPdfQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type EFormPdfQuery = { __typename?: 'Query', requestUserEformPdfs: Array<{ __typename?: 'RequestUserEformPdf', email?: string | null, fullName?: string | null, id: string, createdAt: any, requestUserEformPdf?: string | null, eFormPdf?: { __typename?: 'Asset', url: string } | null }> };

export type CreatePatientMutationVariables = Exact<{
  profileImage: Scalars['String']['input'];
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  contactNumber: Scalars['String']['input'];
  sex: Scalars['String']['input'];
  dateOfBirth: Scalars['String']['input'];
  address?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['String']['input']>;
  occupation?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['String']['input']>;
  statusAppointment: Scalars['String']['input'];
}>;


export type CreatePatientMutation = { __typename?: 'Mutation', createPatient?: { __typename?: 'Patient', id: string } | null, publishManyPatients: { __typename?: 'BatchPayload', count: any } };

export type UpdatePatientInformationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: PatientUpdateInput;
}>;


export type UpdatePatientInformationMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Patient', id: string, dateOfBirth?: string | null, fullName?: string | null, contactNumber?: string | null, sex?: string | null, occupation?: string | null, emergencyContactName?: string | null, relationship?: string | null, relationshipNumber?: string | null, extraEmergencyContactName?: string | null, extraRelationship?: string | null, secondRelationshipNumber?: string | null, address?: string | null, beenExposed?: string | null, coughWithBlood?: string | null, coughduration?: string | null, height?: string | null, weight?: string | null, tuberculosis?: string | null } | null, publishManyPatientsConnection: { __typename?: 'PatientConnection', edges: Array<{ __typename?: 'PatientEdge', node: { __typename?: 'Patient', id: string } }> } };

export type UpdatePatientDentalInformationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: PatientUpdateInput;
}>;


export type UpdatePatientDentalInformationMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Patient', id: string, fullName?: string | null, bleedingGums?: string | null, sensitive?: string | null, foodTrap?: string | null, dryMouth?: string | null, pastGap?: string | null, pastOrthodonic?: string | null, problem?: string | null, clicking?: string | null, bruxing?: string | null, sores?: string | null, dentures?: string | null, active?: string | null, serious?: string | null, dateOfLastExam?: string | null } | null, publishManyPatientsConnection: { __typename?: 'PatientConnection', edges: Array<{ __typename?: 'PatientEdge', node: { __typename?: 'Patient', id: string } }> } };

export type UpdatePatientMedicalInformationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: PatientUpdateInput;
}>;


export type UpdatePatientMedicalInformationMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Patient', id: string, fullName?: string | null, careOfAPhysicians?: string | null, physiciansName?: string | null, phonePhysician?: string | null, areYouInGoodHealth?: string | null, anyChangesInYourHealth?: string | null, hospitalization?: string | null, prescriptionOrCounterMedications?: string | null, allergies?: string | null, specify?: string | null, alcoholIntake?: string | null, amoutAndFrequency?: string | null, forWomen?: string | null, lactating?: string | null, ifYesWhatWasTheIllnessOrProblem?: string | null, dateOfLastPhysicalExam?: string | null, vitaminsNaturalOrHerbalSupplements?: string | null } | null, publishManyPatientsConnection: { __typename?: 'PatientConnection', edges: Array<{ __typename?: 'PatientEdge', node: { __typename?: 'Patient', id: string } }> } };

export type UpdateQuestionUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: PatientUpdateInput;
}>;


export type UpdateQuestionUserMutation = { __typename?: 'Mutation', updatePatient?: { __typename?: 'Patient', id: string, fullName?: string | null, highBloodPressure?: string | null, heartAttack?: string | null, heartDisease?: string | null, heartDiseaseSpecify?: string | null, lowBloodPressure?: string | null, leukemia?: string | null, anemia?: string | null, kidneyDisease?: string | null, kidneyDiseaseSpecify?: string | null, asthma?: string | null, lungDisease?: string | null, lungDiseaseSpecify?: string | null, stroke?: string | null, neurologicalDisorder?: string | null, neurologicalDisorderSpecify?: string | null, epilepsyConvulsions?: string | null, brainInjury?: string | null, psychiatricTreatment?: string | null, diabetes?: string | null, aidsHivInfection?: string | null, congenitalDisease?: string | null, congenitalDiseaseSpecify?: string | null, hepatitis?: string | null, liverDisorder?: string | null, livErDisorderSpecify?: string | null, jointDisorder?: string | null, jointReplacementOrImplants?: string | null, steroidTherapy?: string | null, stomachTroublesUlcers?: string | null, chestPains?: string | null, frequentSoreThroat?: string | null, persistentCough?: string | null, difficultInBreathing?: string | null, cancerOrTumor?: string | null, radiationOrChemotherapy?: string | null, recentWEightLoss?: string | null, others?: string | null, othersSpecify?: string | null } | null, publishManyPatientsConnection: { __typename?: 'PatientConnection', edges: Array<{ __typename?: 'PatientEdge', node: { __typename?: 'Patient', id: string } }> } };

export type RequestUserEformPdfFileMutationVariables = Exact<{ [key: string]: never; }>;


export type RequestUserEformPdfFileMutation = { __typename?: 'Mutation', createRequestUserEformPdf?: { __typename?: 'RequestUserEformPdf', id: string } | null, publishManyRequestUserEformPdfsConnection: { __typename?: 'RequestUserEformPdfConnection', edges: Array<{ __typename?: 'RequestUserEformPdfEdge', node: { __typename?: 'RequestUserEformPdf', id: string } }> } };


export const GetPatienListDocument = gql`
    query GetPatienList {
  patients {
    address
    contactNumber
    fullName
    email
    id
    occupation
    profileImage {
      url
    }
    sex
    statusAppointment
    height
    dateOfBirth
    weight
    createdAt
  }
}
    `;

/**
 * __useGetPatienListQuery__
 *
 * To run a query within a React component, call `useGetPatienListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPatienListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPatienListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPatienListQuery(baseOptions?: Apollo.QueryHookOptions<GetPatienListQuery, GetPatienListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPatienListQuery, GetPatienListQueryVariables>(GetPatienListDocument, options);
      }
export function useGetPatienListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPatienListQuery, GetPatienListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPatienListQuery, GetPatienListQueryVariables>(GetPatienListDocument, options);
        }
export function useGetPatienListSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPatienListQuery, GetPatienListQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPatienListQuery, GetPatienListQueryVariables>(GetPatienListDocument, options);
        }
export type GetPatienListQueryHookResult = ReturnType<typeof useGetPatienListQuery>;
export type GetPatienListLazyQueryHookResult = ReturnType<typeof useGetPatienListLazyQuery>;
export type GetPatienListSuspenseQueryHookResult = ReturnType<typeof useGetPatienListSuspenseQuery>;
export type GetPatienListQueryResult = Apollo.QueryResult<GetPatienListQuery, GetPatienListQueryVariables>;
export const GetNewScheduleDocument = gql`
    query getNewSchedule {
  newSchedules {
    scheduleStatus
    scheduleDate
    room
    id
    contactNumber
    createdAt
    email
    clinician
    time
    location {
      latitude
      longitude
    }
    patients {
      email
      fullName
      id
      profileImage {
        url
        id
      }
    }
  }
}
    `;

/**
 * __useGetNewScheduleQuery__
 *
 * To run a query within a React component, call `useGetNewScheduleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewScheduleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewScheduleQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewScheduleQuery(baseOptions?: Apollo.QueryHookOptions<GetNewScheduleQuery, GetNewScheduleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewScheduleQuery, GetNewScheduleQueryVariables>(GetNewScheduleDocument, options);
      }
export function useGetNewScheduleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewScheduleQuery, GetNewScheduleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewScheduleQuery, GetNewScheduleQueryVariables>(GetNewScheduleDocument, options);
        }
export function useGetNewScheduleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNewScheduleQuery, GetNewScheduleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewScheduleQuery, GetNewScheduleQueryVariables>(GetNewScheduleDocument, options);
        }
export type GetNewScheduleQueryHookResult = ReturnType<typeof useGetNewScheduleQuery>;
export type GetNewScheduleLazyQueryHookResult = ReturnType<typeof useGetNewScheduleLazyQuery>;
export type GetNewScheduleSuspenseQueryHookResult = ReturnType<typeof useGetNewScheduleSuspenseQuery>;
export type GetNewScheduleQueryResult = Apollo.QueryResult<GetNewScheduleQuery, GetNewScheduleQueryVariables>;
export const GetSliderDocument = gql`
    query getSlider {
  getSliders {
    id
    image {
      url
    }
    name
  }
}
    `;

/**
 * __useGetSliderQuery__
 *
 * To run a query within a React component, call `useGetSliderQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSliderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSliderQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSliderQuery(baseOptions?: Apollo.QueryHookOptions<GetSliderQuery, GetSliderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSliderQuery, GetSliderQueryVariables>(GetSliderDocument, options);
      }
export function useGetSliderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSliderQuery, GetSliderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSliderQuery, GetSliderQueryVariables>(GetSliderDocument, options);
        }
export function useGetSliderSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSliderQuery, GetSliderQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSliderQuery, GetSliderQueryVariables>(GetSliderDocument, options);
        }
export type GetSliderQueryHookResult = ReturnType<typeof useGetSliderQuery>;
export type GetSliderLazyQueryHookResult = ReturnType<typeof useGetSliderLazyQuery>;
export type GetSliderSuspenseQueryHookResult = ReturnType<typeof useGetSliderSuspenseQuery>;
export type GetSliderQueryResult = Apollo.QueryResult<GetSliderQuery, GetSliderQueryVariables>;
export const GetMedicalTeamDocument = gql`
    query getMedicalTeam {
  medicalTeams {
    id
    title
    aboutDoctor
    profileImage {
      url
      id
    }
    fullName
    email
    location {
      latitude
      longitude
    }
    phoneNumber
  }
}
    `;

/**
 * __useGetMedicalTeamQuery__
 *
 * To run a query within a React component, call `useGetMedicalTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMedicalTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMedicalTeamQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMedicalTeamQuery(baseOptions?: Apollo.QueryHookOptions<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>(GetMedicalTeamDocument, options);
      }
export function useGetMedicalTeamLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>(GetMedicalTeamDocument, options);
        }
export function useGetMedicalTeamSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>(GetMedicalTeamDocument, options);
        }
export type GetMedicalTeamQueryHookResult = ReturnType<typeof useGetMedicalTeamQuery>;
export type GetMedicalTeamLazyQueryHookResult = ReturnType<typeof useGetMedicalTeamLazyQuery>;
export type GetMedicalTeamSuspenseQueryHookResult = ReturnType<typeof useGetMedicalTeamSuspenseQuery>;
export type GetMedicalTeamQueryResult = Apollo.QueryResult<GetMedicalTeamQuery, GetMedicalTeamQueryVariables>;
export const Get_Tipsguide_DataDocument = gql`
    query GET_TIPSGUIDE_DATA {
  tipsGuides {
    id
    image {
      url
    }
    description
  }
}
    `;

/**
 * __useGet_Tipsguide_DataQuery__
 *
 * To run a query within a React component, call `useGet_Tipsguide_DataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Tipsguide_DataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Tipsguide_DataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Tipsguide_DataQuery(baseOptions?: Apollo.QueryHookOptions<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>(Get_Tipsguide_DataDocument, options);
      }
export function useGet_Tipsguide_DataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>(Get_Tipsguide_DataDocument, options);
        }
export function useGet_Tipsguide_DataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>(Get_Tipsguide_DataDocument, options);
        }
export type Get_Tipsguide_DataQueryHookResult = ReturnType<typeof useGet_Tipsguide_DataQuery>;
export type Get_Tipsguide_DataLazyQueryHookResult = ReturnType<typeof useGet_Tipsguide_DataLazyQuery>;
export type Get_Tipsguide_DataSuspenseQueryHookResult = ReturnType<typeof useGet_Tipsguide_DataSuspenseQuery>;
export type Get_Tipsguide_DataQueryResult = Apollo.QueryResult<Get_Tipsguide_DataQuery, Get_Tipsguide_DataQueryVariables>;
export const Getuzlabs_DataDocument = gql`
    query GETUZLABS_DATA {
  uzLabs {
    address
    email
    id
    images {
      url
      id
    }
    location {
      latitude
      longitude
    }
    name
    phone
  }
}
    `;

/**
 * __useGetuzlabs_DataQuery__
 *
 * To run a query within a React component, call `useGetuzlabs_DataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetuzlabs_DataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetuzlabs_DataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetuzlabs_DataQuery(baseOptions?: Apollo.QueryHookOptions<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>(Getuzlabs_DataDocument, options);
      }
export function useGetuzlabs_DataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>(Getuzlabs_DataDocument, options);
        }
export function useGetuzlabs_DataSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>(Getuzlabs_DataDocument, options);
        }
export type Getuzlabs_DataQueryHookResult = ReturnType<typeof useGetuzlabs_DataQuery>;
export type Getuzlabs_DataLazyQueryHookResult = ReturnType<typeof useGetuzlabs_DataLazyQuery>;
export type Getuzlabs_DataSuspenseQueryHookResult = ReturnType<typeof useGetuzlabs_DataSuspenseQuery>;
export type Getuzlabs_DataQueryResult = Apollo.QueryResult<Getuzlabs_DataQuery, Getuzlabs_DataQueryVariables>;
export const GetNewsFeedDocument = gql`
    query GetNewsFeed {
  newsFeeds {
    title
    id
    description
    images {
      url
    }
  }
}
    `;

/**
 * __useGetNewsFeedQuery__
 *
 * To run a query within a React component, call `useGetNewsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsFeedQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsFeedQuery, GetNewsFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsFeedQuery, GetNewsFeedQueryVariables>(GetNewsFeedDocument, options);
      }
export function useGetNewsFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsFeedQuery, GetNewsFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsFeedQuery, GetNewsFeedQueryVariables>(GetNewsFeedDocument, options);
        }
export function useGetNewsFeedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetNewsFeedQuery, GetNewsFeedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNewsFeedQuery, GetNewsFeedQueryVariables>(GetNewsFeedDocument, options);
        }
export type GetNewsFeedQueryHookResult = ReturnType<typeof useGetNewsFeedQuery>;
export type GetNewsFeedLazyQueryHookResult = ReturnType<typeof useGetNewsFeedLazyQuery>;
export type GetNewsFeedSuspenseQueryHookResult = ReturnType<typeof useGetNewsFeedSuspenseQuery>;
export type GetNewsFeedQueryResult = Apollo.QueryResult<GetNewsFeedQuery, GetNewsFeedQueryVariables>;
export const GetDataCharttingDocument = gql`
    query GetDataChartting($email: String!) {
  newSchedules {
    charting {
      url(transformation: {document: {output: {format: png}}})
    }
    patients(where: {email: $email}) {
      id
    }
  }
}
    `;

/**
 * __useGetDataCharttingQuery__
 *
 * To run a query within a React component, call `useGetDataCharttingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDataCharttingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDataCharttingQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetDataCharttingQuery(baseOptions: Apollo.QueryHookOptions<GetDataCharttingQuery, GetDataCharttingQueryVariables> & ({ variables: GetDataCharttingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDataCharttingQuery, GetDataCharttingQueryVariables>(GetDataCharttingDocument, options);
      }
export function useGetDataCharttingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDataCharttingQuery, GetDataCharttingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDataCharttingQuery, GetDataCharttingQueryVariables>(GetDataCharttingDocument, options);
        }
export function useGetDataCharttingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDataCharttingQuery, GetDataCharttingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDataCharttingQuery, GetDataCharttingQueryVariables>(GetDataCharttingDocument, options);
        }
export type GetDataCharttingQueryHookResult = ReturnType<typeof useGetDataCharttingQuery>;
export type GetDataCharttingLazyQueryHookResult = ReturnType<typeof useGetDataCharttingLazyQuery>;
export type GetDataCharttingSuspenseQueryHookResult = ReturnType<typeof useGetDataCharttingSuspenseQuery>;
export type GetDataCharttingQueryResult = Apollo.QueryResult<GetDataCharttingQuery, GetDataCharttingQueryVariables>;
export const GetUserPersonalInformationDocument = gql`
    query GetUserPersonalInformation($email: String!) {
  patients(where: {email: $email}) {
    id
    fullName
    contactNumber
    dateOfBirth
    height
    weight
    sex
    occupation
    emergencyContactName
    relationship
    relationshipNumber
    extraEmergencyContactName
    secondRelationshipNumber
    coughduration
    coughWithBlood
    beenExposed
    tuberculosis
    extraRelationship
  }
}
    `;

/**
 * __useGetUserPersonalInformationQuery__
 *
 * To run a query within a React component, call `useGetUserPersonalInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserPersonalInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserPersonalInformationQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserPersonalInformationQuery(baseOptions: Apollo.QueryHookOptions<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables> & ({ variables: GetUserPersonalInformationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>(GetUserPersonalInformationDocument, options);
      }
export function useGetUserPersonalInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>(GetUserPersonalInformationDocument, options);
        }
export function useGetUserPersonalInformationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>(GetUserPersonalInformationDocument, options);
        }
export type GetUserPersonalInformationQueryHookResult = ReturnType<typeof useGetUserPersonalInformationQuery>;
export type GetUserPersonalInformationLazyQueryHookResult = ReturnType<typeof useGetUserPersonalInformationLazyQuery>;
export type GetUserPersonalInformationSuspenseQueryHookResult = ReturnType<typeof useGetUserPersonalInformationSuspenseQuery>;
export type GetUserPersonalInformationQueryResult = Apollo.QueryResult<GetUserPersonalInformationQuery, GetUserPersonalInformationQueryVariables>;
export const GetUserDentalInformationDocument = gql`
    query GetUserDentalInformation($email: String!) {
  patients(where: {email: $email}) {
    id
    fullName
    bleedingGums
    sensitive
    foodTrap
    dryMouth
    pastGap
    pastOrthodonic
    problem
    earaches
    clicking
    bruxing
    sores
    dentures
    active
    serious
    dateOfLastExam
  }
}
    `;

/**
 * __useGetUserDentalInformationQuery__
 *
 * To run a query within a React component, call `useGetUserDentalInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDentalInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDentalInformationQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserDentalInformationQuery(baseOptions: Apollo.QueryHookOptions<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables> & ({ variables: GetUserDentalInformationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>(GetUserDentalInformationDocument, options);
      }
export function useGetUserDentalInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>(GetUserDentalInformationDocument, options);
        }
export function useGetUserDentalInformationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>(GetUserDentalInformationDocument, options);
        }
export type GetUserDentalInformationQueryHookResult = ReturnType<typeof useGetUserDentalInformationQuery>;
export type GetUserDentalInformationLazyQueryHookResult = ReturnType<typeof useGetUserDentalInformationLazyQuery>;
export type GetUserDentalInformationSuspenseQueryHookResult = ReturnType<typeof useGetUserDentalInformationSuspenseQuery>;
export type GetUserDentalInformationQueryResult = Apollo.QueryResult<GetUserDentalInformationQuery, GetUserDentalInformationQueryVariables>;
export const GetUserMedicalInformationDocument = gql`
    query GetUserMedicalInformation($email: String!) {
  patients(where: {email: $email}) {
    id
    careOfAPhysicians
    physiciansName
    phonePhysician
    areYouInGoodHealth
    anyChangesInYourHealth
    hospitalization
    prescriptionOrCounterMedications
    allergies
    specify
    alcoholIntake
    amoutAndFrequency
    forWomen
    lactating
    ifYesWhatWasTheIllnessOrProblem
    dateOfLastPhysicalExam
    vitaminsNaturalOrHerbalSupplements
  }
}
    `;

/**
 * __useGetUserMedicalInformationQuery__
 *
 * To run a query within a React component, call `useGetUserMedicalInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMedicalInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMedicalInformationQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserMedicalInformationQuery(baseOptions: Apollo.QueryHookOptions<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables> & ({ variables: GetUserMedicalInformationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>(GetUserMedicalInformationDocument, options);
      }
export function useGetUserMedicalInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>(GetUserMedicalInformationDocument, options);
        }
export function useGetUserMedicalInformationSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>(GetUserMedicalInformationDocument, options);
        }
export type GetUserMedicalInformationQueryHookResult = ReturnType<typeof useGetUserMedicalInformationQuery>;
export type GetUserMedicalInformationLazyQueryHookResult = ReturnType<typeof useGetUserMedicalInformationLazyQuery>;
export type GetUserMedicalInformationSuspenseQueryHookResult = ReturnType<typeof useGetUserMedicalInformationSuspenseQuery>;
export type GetUserMedicalInformationQueryResult = Apollo.QueryResult<GetUserMedicalInformationQuery, GetUserMedicalInformationQueryVariables>;
export const GetUserQuestionnaireDocument = gql`
    query GetUserQuestionnaire($email: String!) {
  patients(where: {email: $email}) {
    id
    fullName
    highBloodPressure
    heartAttack
    heartDisease
    heartDiseaseSpecify
    lowBloodPressure
    leukemia
    anemia
    kidneyDisease
    kidneyDiseaseSpecify
    asthma
    lungDisease
    lungDiseaseSpecify
    stroke
    neurologicalDisorder
    neurologicalDisorderSpecify
    epilepsyConvulsions
    brainInjury
    psychiatricTreatment
    diabetes
    aidsHivInfection
    congenitalDisease
    congenitalDiseaseSpecify
    hepatitis
    liverDisorder
    livErDisorderSpecify
    jointDisorder
    jointReplacementOrImplants
    steroidTherapy
    stomachTroublesUlcers
    chestPains
    frequentSoreThroat
    persistentCough
    difficultInBreathing
    cancerOrTumor
    radiationOrChemotherapy
    recentWEightLoss
    others
    othersSpecify
  }
}
    `;

/**
 * __useGetUserQuestionnaireQuery__
 *
 * To run a query within a React component, call `useGetUserQuestionnaireQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuestionnaireQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuestionnaireQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuestionnaireQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables> & ({ variables: GetUserQuestionnaireQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>(GetUserQuestionnaireDocument, options);
      }
export function useGetUserQuestionnaireLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>(GetUserQuestionnaireDocument, options);
        }
export function useGetUserQuestionnaireSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>(GetUserQuestionnaireDocument, options);
        }
export type GetUserQuestionnaireQueryHookResult = ReturnType<typeof useGetUserQuestionnaireQuery>;
export type GetUserQuestionnaireLazyQueryHookResult = ReturnType<typeof useGetUserQuestionnaireLazyQuery>;
export type GetUserQuestionnaireSuspenseQueryHookResult = ReturnType<typeof useGetUserQuestionnaireSuspenseQuery>;
export type GetUserQuestionnaireQueryResult = Apollo.QueryResult<GetUserQuestionnaireQuery, GetUserQuestionnaireQueryVariables>;
export const EFormPdfDocument = gql`
    query EFormPDF($email: String!) {
  requestUserEformPdfs(where: {email: $email}) {
    eFormPdf {
      url
    }
    email
    fullName
    id
    createdAt
    requestUserEformPdf
  }
}
    `;

/**
 * __useEFormPdfQuery__
 *
 * To run a query within a React component, call `useEFormPdfQuery` and pass it any options that fit your needs.
 * When your component renders, `useEFormPdfQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEFormPdfQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useEFormPdfQuery(baseOptions: Apollo.QueryHookOptions<EFormPdfQuery, EFormPdfQueryVariables> & ({ variables: EFormPdfQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EFormPdfQuery, EFormPdfQueryVariables>(EFormPdfDocument, options);
      }
export function useEFormPdfLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EFormPdfQuery, EFormPdfQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EFormPdfQuery, EFormPdfQueryVariables>(EFormPdfDocument, options);
        }
export function useEFormPdfSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EFormPdfQuery, EFormPdfQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EFormPdfQuery, EFormPdfQueryVariables>(EFormPdfDocument, options);
        }
export type EFormPdfQueryHookResult = ReturnType<typeof useEFormPdfQuery>;
export type EFormPdfLazyQueryHookResult = ReturnType<typeof useEFormPdfLazyQuery>;
export type EFormPdfSuspenseQueryHookResult = ReturnType<typeof useEFormPdfSuspenseQuery>;
export type EFormPdfQueryResult = Apollo.QueryResult<EFormPdfQuery, EFormPdfQueryVariables>;
export const CreatePatientDocument = gql`
    mutation CreatePatient($profileImage: String!, $email: String!, $fullName: String!, $contactNumber: String!, $sex: String!, $dateOfBirth: String!, $address: String, $height: String, $occupation: String, $weight: String, $statusAppointment: String!) {
  createPatient(
    data: {profileImage: {create: {uploadUrl: $profileImage}}, email: $email, fullName: $fullName, contactNumber: $contactNumber, sex: $sex, dateOfBirth: $dateOfBirth, address: $address, height: $height, occupation: $occupation, weight: $weight, statusAppointment: $statusAppointment}
  ) {
    id
  }
  publishManyPatients(to: PUBLISHED) {
    count
  }
}
    `;
export type CreatePatientMutationFn = Apollo.MutationFunction<CreatePatientMutation, CreatePatientMutationVariables>;

/**
 * __useCreatePatientMutation__
 *
 * To run a mutation, you first call `useCreatePatientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePatientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPatientMutation, { data, loading, error }] = useCreatePatientMutation({
 *   variables: {
 *      profileImage: // value for 'profileImage'
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      contactNumber: // value for 'contactNumber'
 *      sex: // value for 'sex'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      address: // value for 'address'
 *      height: // value for 'height'
 *      occupation: // value for 'occupation'
 *      weight: // value for 'weight'
 *      statusAppointment: // value for 'statusAppointment'
 *   },
 * });
 */
export function useCreatePatientMutation(baseOptions?: Apollo.MutationHookOptions<CreatePatientMutation, CreatePatientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePatientMutation, CreatePatientMutationVariables>(CreatePatientDocument, options);
      }
export type CreatePatientMutationHookResult = ReturnType<typeof useCreatePatientMutation>;
export type CreatePatientMutationResult = Apollo.MutationResult<CreatePatientMutation>;
export type CreatePatientMutationOptions = Apollo.BaseMutationOptions<CreatePatientMutation, CreatePatientMutationVariables>;
export const UpdatePatientInformationDocument = gql`
    mutation UpdatePatientInformation($id: ID!, $data: PatientUpdateInput!) {
  updatePatient(where: {id: $id}, data: $data) {
    id
    dateOfBirth
    fullName
    contactNumber
    sex
    occupation
    emergencyContactName
    relationship
    relationshipNumber
    extraEmergencyContactName
    extraRelationship
    secondRelationshipNumber
    address
    beenExposed
    coughWithBlood
    coughduration
    height
    weight
    tuberculosis
  }
  publishManyPatientsConnection {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type UpdatePatientInformationMutationFn = Apollo.MutationFunction<UpdatePatientInformationMutation, UpdatePatientInformationMutationVariables>;

/**
 * __useUpdatePatientInformationMutation__
 *
 * To run a mutation, you first call `useUpdatePatientInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientInformationMutation, { data, loading, error }] = useUpdatePatientInformationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePatientInformationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePatientInformationMutation, UpdatePatientInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePatientInformationMutation, UpdatePatientInformationMutationVariables>(UpdatePatientInformationDocument, options);
      }
export type UpdatePatientInformationMutationHookResult = ReturnType<typeof useUpdatePatientInformationMutation>;
export type UpdatePatientInformationMutationResult = Apollo.MutationResult<UpdatePatientInformationMutation>;
export type UpdatePatientInformationMutationOptions = Apollo.BaseMutationOptions<UpdatePatientInformationMutation, UpdatePatientInformationMutationVariables>;
export const UpdatePatientDentalInformationDocument = gql`
    mutation UpdatePatientDentalInformation($id: ID!, $data: PatientUpdateInput!) {
  updatePatient(where: {id: $id}, data: $data) {
    id
    id
    fullName
    bleedingGums
    sensitive
    foodTrap
    dryMouth
    pastGap
    pastOrthodonic
    problem
    clicking
    bruxing
    sores
    dentures
    active
    serious
    dateOfLastExam
  }
  publishManyPatientsConnection {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type UpdatePatientDentalInformationMutationFn = Apollo.MutationFunction<UpdatePatientDentalInformationMutation, UpdatePatientDentalInformationMutationVariables>;

/**
 * __useUpdatePatientDentalInformationMutation__
 *
 * To run a mutation, you first call `useUpdatePatientDentalInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientDentalInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientDentalInformationMutation, { data, loading, error }] = useUpdatePatientDentalInformationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePatientDentalInformationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePatientDentalInformationMutation, UpdatePatientDentalInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePatientDentalInformationMutation, UpdatePatientDentalInformationMutationVariables>(UpdatePatientDentalInformationDocument, options);
      }
export type UpdatePatientDentalInformationMutationHookResult = ReturnType<typeof useUpdatePatientDentalInformationMutation>;
export type UpdatePatientDentalInformationMutationResult = Apollo.MutationResult<UpdatePatientDentalInformationMutation>;
export type UpdatePatientDentalInformationMutationOptions = Apollo.BaseMutationOptions<UpdatePatientDentalInformationMutation, UpdatePatientDentalInformationMutationVariables>;
export const UpdatePatientMedicalInformationDocument = gql`
    mutation UpdatePatientMedicalInformation($id: ID!, $data: PatientUpdateInput!) {
  updatePatient(where: {id: $id}, data: $data) {
    id
    fullName
    careOfAPhysicians
    physiciansName
    phonePhysician
    areYouInGoodHealth
    anyChangesInYourHealth
    hospitalization
    prescriptionOrCounterMedications
    allergies
    specify
    alcoholIntake
    amoutAndFrequency
    forWomen
    lactating
    ifYesWhatWasTheIllnessOrProblem
    dateOfLastPhysicalExam
    vitaminsNaturalOrHerbalSupplements
  }
  publishManyPatientsConnection {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type UpdatePatientMedicalInformationMutationFn = Apollo.MutationFunction<UpdatePatientMedicalInformationMutation, UpdatePatientMedicalInformationMutationVariables>;

/**
 * __useUpdatePatientMedicalInformationMutation__
 *
 * To run a mutation, you first call `useUpdatePatientMedicalInformationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePatientMedicalInformationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePatientMedicalInformationMutation, { data, loading, error }] = useUpdatePatientMedicalInformationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdatePatientMedicalInformationMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePatientMedicalInformationMutation, UpdatePatientMedicalInformationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePatientMedicalInformationMutation, UpdatePatientMedicalInformationMutationVariables>(UpdatePatientMedicalInformationDocument, options);
      }
export type UpdatePatientMedicalInformationMutationHookResult = ReturnType<typeof useUpdatePatientMedicalInformationMutation>;
export type UpdatePatientMedicalInformationMutationResult = Apollo.MutationResult<UpdatePatientMedicalInformationMutation>;
export type UpdatePatientMedicalInformationMutationOptions = Apollo.BaseMutationOptions<UpdatePatientMedicalInformationMutation, UpdatePatientMedicalInformationMutationVariables>;
export const UpdateQuestionUserDocument = gql`
    mutation UpdateQuestionUser($id: ID!, $data: PatientUpdateInput!) {
  updatePatient(where: {id: $id}, data: $data) {
    id
    fullName
    highBloodPressure
    heartAttack
    heartDisease
    heartDiseaseSpecify
    lowBloodPressure
    leukemia
    anemia
    kidneyDisease
    kidneyDiseaseSpecify
    asthma
    lungDisease
    lungDiseaseSpecify
    stroke
    neurologicalDisorder
    neurologicalDisorderSpecify
    epilepsyConvulsions
    brainInjury
    psychiatricTreatment
    diabetes
    aidsHivInfection
    congenitalDisease
    congenitalDiseaseSpecify
    hepatitis
    liverDisorder
    livErDisorderSpecify
    jointDisorder
    jointReplacementOrImplants
    steroidTherapy
    stomachTroublesUlcers
    chestPains
    frequentSoreThroat
    persistentCough
    difficultInBreathing
    cancerOrTumor
    radiationOrChemotherapy
    recentWEightLoss
    others
    othersSpecify
  }
  publishManyPatientsConnection {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type UpdateQuestionUserMutationFn = Apollo.MutationFunction<UpdateQuestionUserMutation, UpdateQuestionUserMutationVariables>;

/**
 * __useUpdateQuestionUserMutation__
 *
 * To run a mutation, you first call `useUpdateQuestionUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuestionUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuestionUserMutation, { data, loading, error }] = useUpdateQuestionUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateQuestionUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateQuestionUserMutation, UpdateQuestionUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateQuestionUserMutation, UpdateQuestionUserMutationVariables>(UpdateQuestionUserDocument, options);
      }
export type UpdateQuestionUserMutationHookResult = ReturnType<typeof useUpdateQuestionUserMutation>;
export type UpdateQuestionUserMutationResult = Apollo.MutationResult<UpdateQuestionUserMutation>;
export type UpdateQuestionUserMutationOptions = Apollo.BaseMutationOptions<UpdateQuestionUserMutation, UpdateQuestionUserMutationVariables>;
export const RequestUserEformPdfFileDocument = gql`
    mutation RequestUserEformPdfFile {
  createRequestUserEformPdf(
    data: {email: "", fullName: "", requestUserEformPdf: ""}
  ) {
    id
  }
  publishManyRequestUserEformPdfsConnection {
    edges {
      node {
        id
      }
    }
  }
}
    `;
export type RequestUserEformPdfFileMutationFn = Apollo.MutationFunction<RequestUserEformPdfFileMutation, RequestUserEformPdfFileMutationVariables>;

/**
 * __useRequestUserEformPdfFileMutation__
 *
 * To run a mutation, you first call `useRequestUserEformPdfFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestUserEformPdfFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestUserEformPdfFileMutation, { data, loading, error }] = useRequestUserEformPdfFileMutation({
 *   variables: {
 *   },
 * });
 */
export function useRequestUserEformPdfFileMutation(baseOptions?: Apollo.MutationHookOptions<RequestUserEformPdfFileMutation, RequestUserEformPdfFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestUserEformPdfFileMutation, RequestUserEformPdfFileMutationVariables>(RequestUserEformPdfFileDocument, options);
      }
export type RequestUserEformPdfFileMutationHookResult = ReturnType<typeof useRequestUserEformPdfFileMutation>;
export type RequestUserEformPdfFileMutationResult = Apollo.MutationResult<RequestUserEformPdfFileMutation>;
export type RequestUserEformPdfFileMutationOptions = Apollo.BaseMutationOptions<RequestUserEformPdfFileMutation, RequestUserEformPdfFileMutationVariables>;