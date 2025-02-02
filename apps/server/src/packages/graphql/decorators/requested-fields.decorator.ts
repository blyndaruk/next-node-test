import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { FieldNode, GraphQLResolveInfo, Kind } from 'graphql';

export interface RequestedFieldsInfo {
  [fieldName: string]: boolean | RequestedFieldsInfo;
}

export const RequestedFieldsDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const info: GraphQLResolveInfo = ctx.getInfo();

    const fieldNode = info.fieldNodes[0];
    if (!fieldNode || !fieldNode.selectionSet) {
      return {};
    }

    const selections = fieldNode.selectionSet.selections.filter(
      (node): node is FieldNode => node.kind === Kind.FIELD,
    );

    const getRequestedFields = (selections: readonly FieldNode[]): RequestedFieldsInfo => {
      const requestedFields: RequestedFieldsInfo = {};

      selections.forEach((field) => {
        if (field.name.value === '__typename') return;

        if (field.selectionSet) {
          requestedFields[field.name.value] = getRequestedFields(
            field.selectionSet.selections.filter(
              (node): node is FieldNode => node.kind === Kind.FIELD,
            ),
          );
        } else {
          requestedFields[field.name.value] = true;
        }
      });

      return requestedFields;
    };

    return getRequestedFields(selections);
  },
);
