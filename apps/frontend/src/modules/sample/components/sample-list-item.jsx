export function SampleListItemSkeleton() {
  return <div className="bg-gray-500 w-7/12 h-6 animate-pulse rounded-sm" />;
}

export function SampleListItem({ name }) {
  return <div>{name}</div>;
}
