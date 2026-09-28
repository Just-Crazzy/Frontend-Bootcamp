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
          <Folder key={`${name}_${value.type}`} name={name}>
            <Tree data={value.children} />
          </Folder>
        </>
      )
    }

    if (value.type === 'file') {
      return (
        <>
          <File key={`${name}_${value.type}`} name={name} />
        </>
      )
    }

  })

}



export { Tree };

