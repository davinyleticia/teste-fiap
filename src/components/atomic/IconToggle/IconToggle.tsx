export type IconToggleProps = {
  isOpen: boolean;
};

export default function IconToggle({ isOpen }: IconToggleProps){
    return (
  <button className="icon-toggle">
    {isOpen ? '-' : '+'}
  </button>
)};