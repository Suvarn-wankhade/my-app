export class UserConstant {

    public static entityList = [
        { title: '', key: 'selection'},
        { title: 'Name', key: 'name'},
        { title: 'Email', key: 'email'},
        { title: 'Gender', key: 'gender' },
        { title: 'Address', key: 'address'},
        { title: 'Date of Birth', key: 'dateOfBirth'},
        { title: '', key: 'action'}
      ];

      public static action = {
        edit: 'Edit',
        delete: 'Delete',
      };

      public static displayedColumns = ['selection', 'name', 'email', 'gender', 'address', 'dateOfBirth', 'action'];
}
