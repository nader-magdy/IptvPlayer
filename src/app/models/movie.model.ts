export interface Movie {
  num: number
  name: string
  stream_type: string
  stream_id: number
  stream_icon: string
  rating: number
  rating_5based: number
  added: string
  category_id: string
  container_extension: string
  custom_sid: any
  direct_source: string
}

export interface MovieInfo {
    info: Info
    movie_data: MovieData
  }

  export interface Info {
    movie_image: string
    backdrop_path: string[]
    tmdb_id: number
    youtube_trailer: string
    plot: string
    cast: string
    rating: number
    director: string
    releasedate: string
    duration_secs: number
    duration: string
    video: Video
    audio: Audio
    bitrate: number
    year: string
    mpaa: string
  }
  
  export interface Video {
    index: number
    codec_name: string
    codec_long_name: string
    profile: string
    codec_type: string
    codec_time_base: string
    codec_tag_string: string
    codec_tag: string
    width: number
    height: number
    coded_width: number
    coded_height: number
    has_b_frames: number
    sample_aspect_ratio: string
    display_aspect_ratio: string
    pix_fmt: string
    level: number
    color_range: string
    color_space: string
    chroma_location: string
    field_order: string
    refs: number
    is_avc: string
    nal_length_size: string
    r_frame_rate: string
    avg_frame_rate: string
    time_base: string
    start_pts: number
    start_time: string
    bits_per_raw_sample: string
    disposition: Disposition
    tags: Tags
  }
  
  export interface Disposition {
    default: number
    dub: number
    original: number
    comment: number
    lyrics: number
    karaoke: number
    forced: number
    hearing_impaired: number
    visual_impaired: number
    clean_effects: number
    attached_pic: number
    timed_thumbnails: number
  }
  
  export interface Tags {
    language: string
    BPS: string
    "BPS-eng": string
    DURATION: string
    "DURATION-eng": string
    NUMBER_OF_FRAMES: string
    "NUMBER_OF_FRAMES-eng": string
    NUMBER_OF_BYTES: string
    "NUMBER_OF_BYTES-eng": string
    _STATISTICS_WRITING_APP: string
    "_STATISTICS_WRITING_APP-eng": string
    _STATISTICS_WRITING_DATE_UTC: string
    "_STATISTICS_WRITING_DATE_UTC-eng": string
    _STATISTICS_TAGS: string
    "_STATISTICS_TAGS-eng": string
  }
  
  export interface Audio {
    index: number
    codec_name: string
    codec_long_name: string
    profile: string
    codec_type: string
    codec_time_base: string
    codec_tag_string: string
    codec_tag: string
    sample_fmt: string
    sample_rate: string
    channels: number
    channel_layout: string
    bits_per_sample: number
    r_frame_rate: string
    avg_frame_rate: string
    time_base: string
    start_pts: number
    start_time: string
    disposition: Disposition2
    tags: Tags2
  }
  
  export interface Disposition2 {
    default: number
    dub: number
    original: number
    comment: number
    lyrics: number
    karaoke: number
    forced: number
    hearing_impaired: number
    visual_impaired: number
    clean_effects: number
    attached_pic: number
    timed_thumbnails: number
  }
  
  export interface Tags2 {
    language: string
    title: string
    BPS: string
    "BPS-eng": string
    DURATION: string
    "DURATION-eng": string
    NUMBER_OF_FRAMES: string
    "NUMBER_OF_FRAMES-eng": string
    NUMBER_OF_BYTES: string
    "NUMBER_OF_BYTES-eng": string
    _STATISTICS_WRITING_APP: string
    "_STATISTICS_WRITING_APP-eng": string
    _STATISTICS_WRITING_DATE_UTC: string
    "_STATISTICS_WRITING_DATE_UTC-eng": string
    _STATISTICS_TAGS: string
    "_STATISTICS_TAGS-eng": string
  }
  
  export interface MovieData {
    stream_id: number
    name: string
    added: string
    category_id: string
    container_extension: string
    custom_sid: any
    direct_source: string
  }