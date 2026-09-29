import { useState, type PropsWithChildren, type MouseEvent } from "react";

import  './Folder.css'
import { Icon } from "../Icon/Icon";

type TFolderProps = {
  name: string
} & PropsWithChildren

const Folder = (props: TFolderProps) => {
  const { name, children } = props;
  const [isClose, setIsClose] = useState<boolean>(true);

  const handleToggle = (e: MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsClose(!isClose);
  }

  return (
    <div className="folder">
      <Icon type='folder' state={isClose ? 'close' : 'open'}></Icon>
      <span className="folder-label" onClick={handleToggle}>{name}</span>
      <div className={isClose ? 'files' : 'files visible'}>
        {children}
      </div>
    </div>
  )
}

export { Folder };