import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { RightDiv } from '../../Style/AllStyle'
import { TabMenuButton, TabMenuItem, TabMenuContent } from '../../Style/TabMenuStyle'

const TabMenu = ({note}) => {
  return(
    <>
      <RightDiv> 
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <TabMenuButton aria-label="Customise options">
              All notes <ChevronDownIcon />
            </TabMenuButton>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <TabMenuContent side="bottom" sideOffset={3}>
              {Object.keys(note).map((key) => {
                return(
                  <React.Fragment key={key + 'tab' +  note[key].title}>
                    <TabMenuItem> {note[key].title} </TabMenuItem>
                  </React.Fragment>
                )
              })}
            </TabMenuContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </RightDiv>
    </>
  )
}

export default TabMenu