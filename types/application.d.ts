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

function Application(x: string | number): Application;

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

type Track = Item;

interface FileTrack extends Track {
  /** The location of the file represented by this track. */
  location(): any;
  delete(): void;
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
