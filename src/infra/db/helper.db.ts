import { TableColumnOptions } from "typeorm";

export const withTimestamps = () =>
  <TableColumnOptions[]>[
    {
      name: "created_at",
      type: "timestamp",
      isNullable: false,
      default: "now()",
    },
    {
      name: "updated_at",
      type: "timestamp",
      isNullable: false,
      default: "now()",
    },
  ];

export const withSoftDelete = () =>
  <TableColumnOptions[]>[
    {
      name: "deleted_at",
      type: "timestamp",
      isNullable: true,
      default: null,
    },
  ];
