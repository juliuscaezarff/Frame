import {
  RxMagnifyingGlass,
  RxClock,
  RxGear,
  RxPlusCircled
} from 'react-icons/rx'

export default function Header() {
  return (
      <aside className="bg-zinc-900 border-r border-r-zinc-700 p-4 ">
        <div className="flex gap-2 group">
          <button className="w-3 h-3 rounded-full bg-red-400" />
          <button className="w-3 h-3 rounded-full bg-yellow-400" />
          <button className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex items-center gap-4 mt-4 mb-3">
          <img
            className="w-7 h-7 rounded"
            src="http://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2Fd19ec7ad-7d4a-4825-9d83-d6160475ecec%2Fpinterest2.jpg?table=space&id=7fdda2ba-738b-4c83-ba3e-3cb89f7959ee&spaceId=7fdda2ba-738b-4c83-ba3e-3cb89f7959ee&width=40&userId=d6d63cb6-ff51-4f01-bf4d-bf1b027de91f&cache=v2"
            alt=""
          />
          <h1 className="font-bold text-3xl text-zinc-300">Frame</h1>
        </div>
        <div>
          <p className="flex items-center gap-2 p-1">
            <RxMagnifyingGlass size={16} /> Search
          </p>
          <p className="flex items-center gap-2 p-1">
            <RxClock /> Updates
          </p>
          <p className="flex items-center gap-2 p-1">
            <RxGear /> Settings & members
          </p>
          <p className="flex items-center gap-2 p-1">
            <RxPlusCircled /> New page
          </p>
        </div>
      </aside>
  )
}
