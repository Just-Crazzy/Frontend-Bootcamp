interface TreeRoot {
  root: TreeChildren;
}

type TreeChildren = Record<string, TreeNode>;
type TreeNode = FileNode | FolderNode;

interface FileNode {
  type: Extract<NodeType, 'file'>;
}

interface FolderNode {
  type: Extract<NodeType, 'folder'>;
  children: TreeChildren;
}

type NodeType = 'file' | 'folder';

export type { TreeRoot, TreeChildren, TreeNode, FileNode, FolderNode, NodeType }
