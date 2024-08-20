const response = [
  // Lỗi thông thường, lỗi validate, ví dụ có name, age, email trường hợp cả 3 không nhập thì name là bắt buộc, tương tự với age, email. Chỉ báo một lỗi đầu tiên
  {
    isSuccess: false,
    message: "Full name is required",
  },

  // Thêm sửa
  // Thành công
  {
    isSuccess: true,
    message: "Add user success",
    result: {
      // Tuân thủ theo restful api, ví dụ thêm thành công trả về bảng ghi vừa thêm, sửa thành công trả về bảng ghi vừa sửa
    },
  },

  // Thất bại giống trên lỗi từ server, lỗi validate...
  {
    isSuccess: false,
    message: "Add user failed",
  },

  // Xóa
  // Thành công
  {
    isSuccess: true,
    message: "Delete user success",
  },

  // Thất bại giống trên lỗi từ server, lỗi validate...
  {
    isSuccess: false,
    message: "Delete user failed",
  },

  // Get có dữ liệu
  {
    isSuccess: true,
    result: {
      id: 1,
      age: "abc",
    },
  },

  // Get không có dữ liệu
  {
    isSuccess: true,
    result: null,
  },

  // Get all
  {
    isSuccess: true,
    result: [
      {
        id: 1,
        age: "abc",
      },
    ],
    pagination: {
      total: 1,
      page: 1,
      totalPage: 10,
    },
  },
];
