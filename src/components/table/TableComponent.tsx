import {Button, Table} from "rsuite";
import {useDispatch, useSelector} from "react-redux";
import {selectLoader, selectNewUsers} from "@/store/main/mainSlice.selectors";
import {AppDispatch} from "@/store/store";
import {setCurrentUser, setIsEditUser} from "@/store/main/mainSlice";
const { Column, HeaderCell, Cell } = Table;

export const TableComponent = () => {
  const newUsers = useSelector(selectNewUsers)
  const loader = useSelector(selectLoader)
  const dispatch = useDispatch<AppDispatch>()
  const customLocale = {
    emptyMessage: 'Данных еще нет',
  };

  const handleOpenEditUser = (rowData : any) => {
    dispatch(setCurrentUser(rowData))
    dispatch(setIsEditUser(true))
  }

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
            <Button appearance="link" onClick={() => handleOpenEditUser(rowData)}>
              Edit
            </Button>
          )}
        </Cell>
      </Column>
    </Table>
  );
};