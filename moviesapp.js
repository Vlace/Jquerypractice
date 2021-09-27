$('.submit').on('click', function(evt) {
	if ($('#title').val().length >= 2) {
		if ($('#rating').val() >= 0 && $('#rating').val() <= 10) {
			$('tbody').append(
				$(
					`<tr class="movieRow"><td class="movie-title-data">${$(
						'#title'
					).val()}</td><td class="movie-rating-data">${$(
						'#rating'
					).val()}</td><td><button class="buttonDelete">DELETE</button></td></tr>`
				)
			);

			evt.preventDefault();
		} else {
			alert('The rating needs to be between 0 and 10');
		}
	} else {
		alert('Enter valid movie title. (Needs to be longer than two characters)');
	}
});
// Delete button
$('tbody').on('click', '.buttonDelete', function(evt) {
	$(evt.target).closest('tr').remove();
});

let switchVariable = 0;
let sortDirection = 1;
const moviesArray = [];

$('.movie-title').on('click', function() {
	const table = document.querySelector('tbody');
	const tbodyRowCount = table.rows.length;
	if (switchVariable === 1) {
		$('.movie-rating').removeClass('headerSortUp headerSortDown');
		switchVariable = 0;
	}
	sortDirection === 0 ? (sortDirection = 1) : (sortDirection = 0);
	if (sortDirection === 0) {
		$('.movie-title').addClass('headerSortUp');
		$('.movie-title').removeClass('headerSortDown');
		for (let i = 0; i < tbodyRowCount; i++) {
			moviesArray.push([ $('.movie-title-data').eq(i).html(), $('.movie-rating-data').eq(i).html() ]);
		}
		moviesArray.sort();
		$('tbody').empty();
		for (let i = 0; i < tbodyRowCount; i++) {
			$('tbody').append(
				$(
					`<tr class="movieRow"><td class="movie-title-data">${moviesArray[
						i
					][0]}</td><td class="movie-rating-data">${moviesArray[
						i
					][1]}</td><td><button>DELETE</button></td></tr>`
				)
			);
		}
	}
	if (sortDirection === 1) {
		$('.movie-title').addClass('headerSortDown');
		$('.movie-title').removeClass('headerSortUp');
		for (let i = tbodyRowCount - 1; i >= 0; i--) {
			moviesArray.push([ $('.movie-title-data').eq(i).html(), $('.movie-rating-data').eq(i).html() ]);
		}
		moviesArray.sort();
		$('tbody').empty();
		for (let i = tbodyRowCount - 1; i >= 0; i--) {
			$('tbody').append(
				$(
					`<tr class="movieRow"><td class="movie-title-data">${moviesArray[
						i
					][0]}</td><td class="movie-rating-data">${moviesArray[
						i
					][1]}</td><td><button>DELETE</button></td></tr>`
				)
			);
		}
	}
	moviesArray.length = 0;
});

$('.movie-rating').on('click', function() {
	const table = document.querySelector('tbody');
	const tbodyRowCount = table.rows.length;
	if (switchVariable === 0) {
		$('.movie-title').removeClass('headerSortUp headerSortDown');
		switchVariable = 1;
	}
	sortDirection === 0 ? (sortDirection = 1) : (sortDirection = 0);
	if (sortDirection === 0) {
		$('.movie-rating').addClass('headerSortUp');
		$('.movie-rating').removeClass('headerSortDown');
		for (let i = 0; i < tbodyRowCount; i++) {
			moviesArray.push([ $('.movie-title-data').eq(i).html(), $('.movie-rating-data').eq(i).html() ]);
		}
		moviesArray.sort(function(a, b) {
			return a[1] - b[1];
		});
		$('tbody').empty();
		for (let i = 0; i < tbodyRowCount; i++) {
			$('tbody').append(
				$(
					`<tr class="movieRow"><td class="movie-title-data">${moviesArray[
						i
					][0]}</td><td class="movie-rating-data">${moviesArray[
						i
					][1]}</td><td><button>DELETE</button></td></tr>`
				)
			);
		}
	}

	if (sortDirection === 1) {
		$('.movie-rating').addClass('headerSortDown');
		$('.movie-rating').removeClass('headerSortUp');
		for (let i = 0; i < tbodyRowCount; i++) {
			moviesArray.push([ $('.movie-title-data').eq(i).html(), $('.movie-rating-data').eq(i).html() ]);
		}
		moviesArray.sort(function(a, b) {
			return b[1] - a[1];
		});
		$('tbody').empty();
		for (let i = 0; i < tbodyRowCount; i++) {
			$('tbody').append(
				$(
					`<tr class="movieRow"><td class="movie-title-data">${moviesArray[
						i
					][0]}</td><td class="movie-rating-data">${moviesArray[
						i
					][1]}</td><td><button>DELETE</button></td></tr>`
				)
			);
		}
	}
	moviesArray.length = 0;
});
