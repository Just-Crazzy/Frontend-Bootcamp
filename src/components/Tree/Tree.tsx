import type { TreeChildren } from "../../types/types.ts";
import { File } from '../File/File';
import { Folder } from "../Folder/Folder";

type TreeProps = {
  data: TreeChildren;
}

const Tree = (props: TreeProps) => {
  const { data } = props;

  return Object.entries(data)?.map(([name, value]) => {

    if (value.type === 'folder') {
      return (
        <>
          <Folder name={name}>
            <Tree key={`${name}_${value.type}`} data={value.children} />
          </Folder>
        </>
      )
    }

    if (value.type === 'file') {
      return (
        <>
          <File name={name} />
        </>
      )
    }

  })

}



export { Tree };

