<template>
	<div class="table">
		<div class="table__head">
			<div class="table__row fw">
				<div class="table__column column" v-for="(title, index) in tableTitles" :key="index">
					<p v-if="index !== 0 " class="table__column-title column-title" v-html="title"></p>
					<label v-if="index === 0" class="table__column-title column-title filter-input">
						<input v-model="sortByName" type="checkbox" class="filter-input__input">
						<span class="filter-input__name" v-html="title"></span>
						<img class="filter-input__icon" src="/images/arrow.svg" alt="sort">
					</label>
				</div>
			</div>
		</div>
		<div class="table__body">
			<div class="table__row card fw" v-for="(item, index) in displayedGalaxies" :key="index">

				<div class="table__column column fw">
					<p class="card__subtitle column-title column-title--marked" v-html="tableTitles[0]"></p>
					<div class="card__descr fw">
						<img class="card__img" v-if="item.img" :src="item.img" :alt="item.constellation">
						<h2 class="card__name" v-if="item.name" v-html="item.name"></h2>
					</div>
				</div>

					<div class="table__column column fw">
					<p class="card__subtitle column-title" v-html="tableTitles[1]"></p>
					<div class="card__descr fw">
						<p class="card__constellation" v-if="item.constellation" v-html="item.constellation"></p>
					</div>
				</div>

					<div class="table__column column fw">
					<p class="card__subtitle column-title" v-html="tableTitles[2]"></p>
					<div class="card__descr fw">
						<p class="card__info" v-if="item.originOfName" v-html="item.originOfName"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		content: {
			type: Array,
			default: [],
		},
		searchByName: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			tableTitles: [
				'Galaxy Name',
				'Constellation',
				'Origin of name'
			],
			sortByName: false,
		}
	},
	computed: {
		displayedGalaxies() {
			let galaxies = [...this.content];
			
			if(this.sortByName) {
				galaxies = galaxies.sort( (a, b) => {
					return a.name.localeCompare(b.name);
				})
			}
			
			if(this.searchByName) {
				galaxies = galaxies
					.filter( galaxy => galaxy.name
						.toLowerCase()
						.match(this.searchByName
							.toLowerCase()
						)
					);
			}
			
			return galaxies;
		}
	}
}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.table {
		&__head {
			margin: 0 0 15px;
			@media (max-width: 1279px) {
				display: none;
			}
		}
		&__body {
			.table {
				&__row {
					&:first-child {
						.table__column {
							border-top: 1px solid #E0E0E0;
							@media (max-width: 1279px) {
								&:nth-child(n + 2) {
									border-top: 0;
								}
							}
						}
					}
				}
				&__column {
					padding: 15px;
					border-bottom: 1px solid #E0E0E0;
					border-right: 1px solid #E0E0E0;
					&:nth-child(1) {
						border-left: 1px solid #E0E0E0;
						@media (max-width: 1279px) {
							border-top: 1px solid #E0E0E0;
						}
					}
					@media (max-width: 1279px) {
						&:nth-child(n) {
							border-left: 1px solid #E0E0E0;
						}
					}
				}
			}
		}
		&__column {
			align-items: center;
			justify-content: flex-start;
			overflow: hidden;
			&:nth-child(1) {
				width: 30%;
			}
			&:nth-child(2) {
				width: 20%;
			}
			&:nth-child(3) {
				width: 50%;
			}
			@media (max-width: 1279px) {
				&:nth-child(n) {
					width: 100%;
				}
			}
		}
	}

	.column-title {
		border: 0;
		background-color: transparent;
		font-size: 12px;
		line-height: 1.2;
		font-family: "Roboto", sans-serif;
		font-weight: 400; // normal not enough thin due design
		color: #909597;
		text-transform: uppercase;
		@media (max-width: 1279px) {
			font-size: 10px;
		}
		&--marked {
			font-weight: 900;
			color: #263238;
			letter-spacing: 1px;
		}
	}

	.filter-input{
		&__name {
			@extend .column-title;
			font-weight: 900;
			color: #263238;
			letter-spacing: 1px;
			cursor: pointer;
			display: inline-block;
			margin: 0 5px 0 0;
		}
		&__input {
			position: absolute;
			appearance: none;
			&:checked {
				& ~ .filter-input__icon {
					transform: rotate(180deg);
				} 
			}
		}
		&__icon {
			width: 10px;
			height: 10px;
			transition: transform .25s;
		}
	}

	.card{
		@media (max-width: 1279px) {
			flex-direction: column;
			margin: 0 0 25px;
		}
		.table {
			&__column {
				align-items: center;
				justify-content: flex-start;
				@media (max-width: 1279px) {
					flex-direction: column;
					align-items: flex-start;
				}
			}
		}
		&__subtitle {
			margin: 0;
			display: none;
			@media (max-width: 1279px) {
				display: block;
				margin: 0 0 10px;
			}
		}
		&__descr {
			align-items: center;
		}
		&__img {
			width: 50px;
			height: 50px;
			object-fit: cover;
			margin: 0 20px 0 0;
			@media (max-width: 1279px) {
				width: 20px;
				height: 20px;
				margin: 0 16px 0 0;
			}
		}
		&__name,
		&__constellation,
		&__info {
			font-size: 16px;
			line-height: 1.33;
			font-family: "Roboto", sans-serif;
			color: #263238;
		}
		&__constellation,
		&__info {
			font-weight: 300;
			@media (max-width: 1279px) {
				font-size: 14px;
			}
		}
		&__name {
			font-weight: 500; // due design view 400 not enough bold
		}
	}
</style>