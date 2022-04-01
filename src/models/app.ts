export type RootStackParams = {
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  FolderDetail: {
    folderName: string;
    id: string;
  };
  NoteDetail: {
    folder: IFolder;
    note: INote;
  };
};

interface IFolder {
  id: string;
  folderName: string;
}

interface INote {
  id: string;
  title: string;
  desc: string;
  time: number;
}
