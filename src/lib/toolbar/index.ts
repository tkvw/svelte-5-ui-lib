import Toolbar from "./Toolbar.svelte";
import ToolbarButton from "./ToolbarButton.svelte";
import ToolbarGroup from "./ToolbarGroup.svelte";
import { type Snippet } from "svelte";
import { toolbar, toolbarGroup, toolbarButton } from "./theme";
import type { HTMLAttributes } from "svelte/elements";

type ToolbarColor = "primary" | "secondary" | "default" | undefined;

interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  end?: Snippet;
  embedded?: boolean;
  color?: ToolbarColor;
  separatorClass?: string;
}

type SpacingType = "default" | "tight" | "loose" | undefined;
type PaddingType = "default" | "none" | undefined;
type PositionType = "first" | "last" | "middle" | undefined;

interface ToolbarGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string;
  divClass?: string;
  spacing?: SpacingType;
  padding?: PaddingType;
  position?: PositionType;
}

type ToolbarButtonType = "primary" | "default" | "dark" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | undefined;

interface ToolbarButtonProps {
  children: Snippet;
  color?: ToolbarButtonType;
  name?: string;
  ariaLabel?: string;
  size?: "xs" | "sm" | "md" | "lg";
  href?: string;
  class?: string;
  onclick?: () => void;
}

export { Toolbar, toolbar, ToolbarButton, toolbarButton, ToolbarGroup, toolbarGroup, type ToolbarProps, type ToolbarGroupProps, type ToolbarButtonProps };
