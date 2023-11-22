import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import CollectionsTreemenu from '~/components/CollectionsTreemenu';
import '~/styles/app.css';
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverHeading,
  PopoverClose
} from "./Popover";


const COLLECTIONS_QUERY = gql`
  query Collections {
    collections {
      items {
        id
        name
        slug
        parent {
          id
          name
          slug
        }
      }
    }
  }
`;

  function Uncontrolled() {
    const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
    return (
      <div>
        <h1>Floating UI — Popover</h1>
        <Popover>
          <PopoverTrigger>My trigger</PopoverTrigger>
          <PopoverContent className="Popover">
            <PopoverHeading>My popover heading</PopoverHeading>
            <PopoverDescription><div>
        <CollectionsTreemenu collectionsData={{ collections }} />
        </div></PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
  
  function Controlled() {
    const { loading, error, data } = useQuery(COLLECTIONS_QUERY);
  const collections = data?.collections?.items || [];
    const [open, setOpen] = useState(false);
    return (
      <div >
        <h1>Floating UI — Popover</h1>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger onClick={() => setOpen((v) => !v)}>
            My trigger
          </PopoverTrigger>
          <PopoverContent className="Popover">
            <PopoverHeading>My popover heading</PopoverHeading>
            <PopoverDescription><div>
        <CollectionsTreemenu collectionsData={{ collections }} />
        </div></PopoverDescription>
            <PopoverClose>Close</PopoverClose>
          </PopoverContent>
        </Popover>
      </div>
    );
  }


  export default function Sliderex() {
    return <Uncontrolled />;
  }
