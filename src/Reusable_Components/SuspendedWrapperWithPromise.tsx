import { CircularProgress } from "@mui/material";
import { Suspense, cloneElement, ReactElement } from "react";
import { Await } from "react-router-dom";
import { ErrorElementSmall } from "./ErrorElementSmall";

type SuspendedWrapperWithPromiseProps<T> = {
	promise: Promise<T>;
	children: ReactElement;
};

const SuspendedWrapperWithPromise = <T,>({
	promise,
	children,
}: SuspendedWrapperWithPromiseProps<T>) => {
	return (
		<Suspense fallback={<CircularProgress />}>
			<Await
				resolve={promise}
				errorElement={<ErrorElementSmall message={"Error loading component"} />}
			>
				{(resolvedPromise) => (
					<>{cloneElement(children, { resolvedPromise })}</>
				)}
			</Await>
		</Suspense>
	);
};

export { SuspendedWrapperWithPromise };
