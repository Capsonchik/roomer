import {Button, Table} from "rsuite";
import {useSelector} from "react-redux";
import {selectLoader, selectNewUsers, selectUsers} from "@/store/main/mainSlice.selectors";
import {Users} from "@/types/User";
const { Column, HeaderCell, Cell } = Table;

export const TableComponent = () => {
  const users: Users = useSelector(selectUsers)
  const newUsers = useSelector(selectNewUsers)
  const loader = useSelector(selectLoader)
  const customLocale = {
    emptyMessage: 'Данных еще нет',
  };

  return (
    <Table
      locale={customLocale}
      height={700}
      data={newUsers ? newUsers : []}
      loading={loader}
      onRowClick={rowData => {
        console.log(rowData);
      }}
    >
      <Column flexGrow={2} sortable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>

      <Column flexGrow={2} sortable>
        <HeaderCell>Username</HeaderCell>
        <Cell dataKey="username" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>Email</HeaderCell>
        <Cell dataKey="email" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>WebSite</HeaderCell>
        <Cell dataKey="website" />
      </Column>
      <Column width={80} fixed="right">
        <HeaderCell>...</HeaderCell>

        <Cell style={{ padding: '6px' }}>
          {rowData => (
            <Button appearance="link" onClick={() => console.log(rowData)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};