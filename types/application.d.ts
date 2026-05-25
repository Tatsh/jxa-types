interface Application {
  running(): boolean;
  /** Activate the application or the specified window. */
  activate(specifier?: any): void;
  strictPropertyScope: boolean;
  commandsOfClass(): any;
  /** The version number of the application. */
  version(): string;
  id(): any;
  /** Is this the front-most (active) application? */
  frontmost(): boolean;
  strictCommandScope: boolean;
  propertiesOfClass(): JXReadonlyArray<any>;
  parentOfClass(): any;
  includeStandardAdditions: boolean;
  strictParameterType: boolean;
  /** Quit the application. */
  quit(saving?: 'ask' | 'yes' | 'no'): void;
  displayNameForPropertyOfClass(cls?: any): string | null;
  displayNameForElementOfClass(): string | null;
  displayNameForCommand(): string | null;
  elementsOfClass(): JXReadonlyArray<any>;
  /**  The name of the application. */
  name(): string;
  launch(): void;
  say(s: string): void;
  /** Display a message, possibly with choices as buttons. */
  displayDialog(
    message: string,
    args?: {
      defaultAnswer?: string; // the default editable string
      hiddenAnswer?: boolean; // Should editable text be displayed as bullets? (default is false)
      buttons?: Array<string>; // a list of up to three button names
      defaultButton?: string | number; // the name or number of the default button — NB: starts at index 1
      cancelButton?: string | number; // the name or number of the cancel button
      withTitle?: string; // the dialog window title
      withIcon?:
        | string // the resource name or ID of the icon to display…
        | number
        | 'stop' // …or one of these system icons…
        | 'note'
        | 'caution'
        | Item; // …or an alias or file reference to a ‘.icns’ file
      givingUpAfter?: number; // number of seconds to wait before automatically dismissing the dialog
    },
  ): DialogReply;
  /** Displays a dialog with choices. If the user chooses to cancel, `false` is
   * returned. Otherwise, a list of items selected is returned. */
  chooseFromList(
    l: (number | string)[],
    args?: {
      withTitle?: string;
      withPrompt?: string;
      defaultItems?: (number | string)[];
      okButtonName?: string;
      cancelButtonName?: string;
      multipleSelectionsAllowed?: boolean;
      emptySelectionAllowed?: boolean;
    },
  ): false | (number | string)[];
}

interface DialogReply {
  buttonReturned?: string; // name of button chosen (empty if ‘giving up after’ was supplied and dialog timed out)
  textReturned?: string; //  text entered (present only if ‘default answer’ was supplied)
  gaveUp: boolean; // Did the dialog time out? (present only if ‘giving up after’ was supplied)
}

interface Item {
  /** Get the class (string) of a selected item. */
  class(): any;
  container(): any;
  id(): number;
  index(): number;
  /** Name of the item (song title, etc). */
  name(): string;
  persistentID(): string;
  properties(): any;
}

/**
 * A track in an iTunes or Music library, derived from the Track Suite of the application's
 * scripting dictionary. Subclassed by {@link FileTrack} (local files), {@link AudioCDTrack}
 * (audio CDs), and URL tracks (remote streams).
 */
interface Track extends Item {
  /** Name of the album the track belongs to. */
  album(): string;
  /** Album artist (compilation/various-artist albums use this in addition to {@link artist}). */
  albumArtist(): string;
  /** Artist credited on the track. */
  artist(): string;
  /** Bit rate in kbps. */
  bitRate(): number;
  /** Beats per minute. Zero when unset. */
  bpm(): number;
  /** Freeform user comment. */
  comment(): string;
  /** Whether the track belongs to a compilation album. */
  compilation(): boolean;
  /** Composer credit. */
  composer(): string;
  /** Stable per-library database ID (distinct from {@link Item.id}). */
  databaseID(): number;
  /** Date the track was added to the library. */
  dateAdded(): Date;
  /** Long-form description (used by some podcasts / video). */
  description(): string;
  /** Number of discs in the album set. */
  discCount(): number;
  /** Disc number within the album set. */
  discNumber(): number;
  /** Length in seconds. */
  duration(): number;
  /** Whether the track is enabled for playback. */
  enabled(): boolean;
  /** Episode identifier (podcast/TV show). */
  episodeID(): string;
  /** Episode number (podcast/TV show). */
  episodeNumber(): number;
  /** Stop offset in seconds (zero means play to the end). */
  finish(): number;
  /** Genre. */
  genre(): string;
  /** Grouping label. */
  grouping(): string;
  /** Kind descriptor as displayed in Music.app (e.g. "Apple Lossless audio file"). */
  kind(): string;
  /** Long description (typically used by podcasts). */
  longDescription(): string;
  /** Lyrics text. */
  lyrics(): string;
  /** Date the track was last modified. */
  modificationDate(): Date;
  /** Number of times the track has been played. */
  playedCount(): number;
  /** Date the track was last played. */
  playedDate(): Date;
  /** Track rating (0-100 in the AppleScript API). */
  rating(): number;
  /** Original release date. */
  releaseDate(): Date;
  /** Sample rate in Hz. */
  sampleRate(): number;
  /** Season number (TV show). */
  seasonNumber(): number;
  /** Show name (TV show). */
  show(): string;
  /** File size in bytes. */
  size(): number;
  /** Number of times the track has been skipped. */
  skippedCount(): number;
  /** Date the track was last skipped. */
  skippedDate(): Date;
  /** Sort key for the album (overrides default alphabetic sort). */
  sortAlbum(): string;
  /** Sort key for the album artist. */
  sortAlbumArtist(): string;
  /** Sort key for the artist. */
  sortArtist(): string;
  /** Sort key for the composer. */
  sortComposer(): string;
  /** Sort key for the track name. */
  sortName(): string;
  /** Sort key for the show. */
  sortShow(): string;
  /** Start offset in seconds. */
  start(): number;
  /** Length formatted as a string (e.g. "3:45"). */
  time(): string;
  /** Number of tracks on the album. */
  trackCount(): number;
  /** Track number within the album. */
  trackNumber(): number;
  /** `true` when the track has never been played. */
  unplayed(): boolean;
  /** Video kind for video tracks. */
  videoKind(): 'none' | 'movie' | 'music video' | 'TV show';
  /** Per-track volume adjustment in the range -100..100. */
  volumeAdjustment(): number;
  /** Release year. */
  year(): number;
}

interface FileTrack extends Track {
  /** The location of the file represented by this track. */
  location(): any;
  delete(): void;
  (): FileTrack;
  rating: number;
}

interface ITunesLibrary {
  name(): string;
  tracks(): JXReadonlyArray<FileTrack>;
}

interface AudioCDTrack extends Track {
  location: any;
}

interface AudioCDPlaylist {
  artist(): string;
  compilation(): boolean;
  composer(): string;
  discCount(): number;
  discNumber(): number;
  genre(): string;
  year(): number;
  audioCDTracks(): JXReadonlyArray<AudioCDTrack>;
}

interface Playlist {
  description(): string;
  disliked(): boolean;
  duration(): boolean;
  name(): string;
  loved(): boolean;
  parent(): Playlist | null;
  size(): number;
  specialKind(): 'none' | 'folder' | 'Genius' | 'Library' | 'Music' | 'Purchased Music';
  time(): string;
  visible(): boolean;
  tracks(): JXReadonlyArray<Track>;
}

/** The master library playlist. */
interface LibraryPlaylist extends Playlist {
  /** Tracks which are local files. */
  fileTracks(): JXReadonlyArray<FileTrack>;
  /** Tracks which are from remote URLs. */
  urlTracks(): JXReadonlyArray<any>;
  sharedTracks(): JXReadonlyArray<any>;
}

/** iTunes/Music media Source. */
interface Source extends Item {
  capacity(): number;
  freeSpace(): number;
  kind():
    | 'library'
    | 'audio CD'
    | 'MP3 CD'
    | 'radio tuner'
    | 'shared library'
    | 'iTunes Store'
    | 'unknown';
  audioCDPlaylists(): JXReadonlyArray<AudioCDPlaylist>;
  /** Master library playlists. Usually there is only one. */
  libraryPlaylists(): JXReadonlyArray<LibraryPlaylist>;
  playlists(): JXReadonlyArray<any>;
  radioTunerPlaylists(): JXReadonlyArray<any>;
  subscriptionPlaylists(): JXReadonlyArray<any>;
  userPlaylists(): JXReadonlyArray<any>;
}

/** Application interface specific to iTunes/Music. */
interface ItunesApplication extends Application {
  airplayEnabled(): boolean;
  converting(): boolean;
  currentStreamTitle(): string;
  currentStreamURL(): string;
  eqEnabled(): boolean;
  fixedIndexing(): boolean;
  fullScreen(): boolean;
  mute(): boolean;
  playerPosition(): number;
  playerState(): 'stopped' | 'playing' | 'paused' | 'fast forwarding' | 'rewinding';
  shuffleEnabled(): boolean;
  shuffleMode(): 'songs' | 'albums' | 'groupings';
  songRepeat(): 'off' | 'one' | 'all';
  soundVolume(): number;
  visualsEnabled(): boolean;
  sources(): JXReadonlyArray<Source>;
  /** Gets the currently selected items. */
  selection(): JXReadonlyArray<Item>;
  /** Update file track information from the current information in the
   * track’s file. */
  refresh(track: FileTrack): void;
  currentTrack(): Track;
  add(paths: any[], args: { to?: LibraryPlaylist }): JXReadonlyArray<Track>;
}

interface FinderFolderContentName {
  url: () => string;
}

interface FinderFolderItem {
  entireContents: () => FinderFolderContentName[];
  folders: Entries<FinderFolderItem>;
  items: Entries<FinderItem>;
}

interface FinderApplication extends Application {
  exists(path: string): boolean;
  home: () => FinderFolderItem;
}

interface FinderFolder {
  entireContents(): {
    url(): string;
  }[];
}

interface SystemEventsProcess {
  visible: boolean;
  windows: JXReadonlyArray<{
    radioGroups: JXReadonlyArray<{
      radioButtons: JXReadonlyArray<{
        click: () => void;
      }>;
    }>;
    tabGroups: JXReadonlyArray<{
      scrollAreas: JXReadonlyArray<{
        tables: JXReadonlyArray<{ rows: JXReadonlyArray<object> }>;
      }>;
    }>;
  }>;
}

interface SystemEventsApplication extends Application {
  processes: JXReadonlyArray<SystemEventsProcess>;
  keyCode(n: number): void;
}

interface Entries<T> {
  (): Entries<T>;
  [n: number]: T;
  byName: (name: string) => T;
  length: number;
}

interface MenuItem {
  click: () => any;
  enabled: () => boolean;
  menus: Menu[];
  title: () => string;
}

interface Menu {
  menuItems: Entries<MenuItem>;
}

interface MenuBarItem {
  menus: Menu[];
}

interface MenuBar {
  menuBarItems: Entries<MenuBarItem>;
}

interface SystemEventsProcess {
  menuBars: MenuBar[];
}

interface FinderItem {
  url: () => string;
}

function Application(x: 'Finder'): FinderApplication;
function Application(x: 'iTunes' | 'Music'): ItunesApplication;
function Application(x: 'System Events'): SystemEventsApplication;
function Application(x: string | number): Application;
