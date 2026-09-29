type TIconProps = {
  type: NodeType;
  state?: 'open' | 'close';
}

import type { NodeType } from '../../types/types';
import './Icon.css';

const Icon = (props: TIconProps) => {
  const { type, state } = props;

  const isFolderClose = state !== 'open' ? iconFolder : iconOpenFolder;


  return (
    <>
      {type === 'file' && iconFile}

      {type === 'folder' && isFolderClose}
    </>
  )
}

export { Icon };


const iconFolder = (<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="folder" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon folder-icon"><path id="secondary" d="M21,8V19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H9.59a1,1,0,0,1,.7.29l2.42,2.42a1,1,0,0,0,.7.29H20A1,1,0,0,1,21,8Z"></path><path id="primary" d="M21,8V19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4H9.59a1,1,0,0,1,.7.29l2.42,2.42a1,1,0,0,0,.7.29H20A1,1,0,0,1,21,8Z"></path></svg>);

const iconOpenFolder = (<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="folder-alt" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon folder-icon--open"><polygon id="secondary" points="18 20 21 11 7 11 3 20 18 20"></polygon><path id="primary" d="M3,20V5A1,1,0,0,1,4,4H8a1,1,0,0,1,.71.29l2.41,2.42a1,1,0,0,0,.71.29H17a1,1,0,0,1,1,1v3"></path><polygon id="primary-2" data-name="primary" points="18 20 21 11 7 11 3 20 18 20"></polygon></svg>);

const iconFile = (<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" id="file-8" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" className="icon file-icon"><path id="secondary" d="M18,3H11V9H5V20a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V4A1,1,0,0,0,18,3Z"></path><path id="primary" d="M11,3h7a1,1,0,0,1,1,1V20a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9ZM5,9h6V3Z"></path></svg>);


